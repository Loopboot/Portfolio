# Build stage - Node.js for frontend assets
FROM node:22-alpine AS frontend-builder

WORKDIR /app

# Set production environment
ENV NODE_ENV=production

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
FROM php:8.4-apache

# Install system dependencies including SQLite
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    unzip \
    sqlite3 \
    libsqlite3-dev \
    && docker-php-ext-install zip pdo pdo_sqlite \
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

# Create SQLite database and run migrations
RUN touch /var/www/html/database/database.sqlite && \
    chown www-data:www-data /var/www/html/database/database.sqlite && \
    chmod 664 /var/www/html/database/database.sqlite

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/database && \
    chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache && \
    chmod 775 /var/www/html/database

# Configure Apache
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf && \
    sed -i 's|/var/www/|/var/www/html/public|g' /etc/apache2/apache2.conf && \
    echo '<Directory /var/www/html/public>\n    AllowOverride All\n</Directory>' >> /etc/apache2/apache2.conf

# Setup Laravel
RUN if [ ! -f .env ]; then cp .env.example .env; fi && \
    php artisan key:generate --ansi && \
    php artisan migrate --force --no-interaction && \
    php artisan config:cache && \
    php artisan route:cache && \
    php artisan view:cache

EXPOSE 80

CMD ["apache2-foreground"]
