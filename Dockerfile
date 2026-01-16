# Build stage - Node.js for frontend assets
FROM node:22-alpine AS frontend-builder

WORKDIR /app

# Install pnpm via npm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files needed for build
COPY resources ./resources
COPY vite.config.ts tsconfig.json eslint.config.js ./
COPY components.json ./
COPY public ./public

# Build frontend assets
RUN pnpm run build

# Production stage - PHP with Apache
FROM php:8.2-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    unzip \
    && docker-php-ext-install zip \
    && a2enmod rewrite \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copy application files
COPY . .

# Copy built frontend assets from builder stage
COPY --from=frontend-builder /app/public/build ./public/build

# Install PHP dependencies (production only)
RUN composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache && \
    chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Configure Apache
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf && \
    sed -i 's|/var/www/|/var/www/html/public|g' /etc/apache2/apache2.conf && \
    echo '<Directory /var/www/html/public>\n    AllowOverride All\n</Directory>' >> /etc/apache2/apache2.conf

# Setup Laravel
RUN if [ ! -f .env ]; then cp .env.example .env; fi && \
    php artisan key:generate --ansi && \
    php artisan config:cache && \
    php artisan route:cache && \
    php artisan view:cache

EXPOSE 80

CMD ["apache2-foreground"]
