# Portfolio - Docker Setup

## Quick Start (Recommended - Pre-built assets)

**Step 1:** Build frontend assets locally:
```bash
pnpm install
pnpm run build
```

**Step 2:** Build and run with Docker:
```bash
# Build the image
docker build -f Dockerfile.simple -t portfolio:latest .

# Run the container
docker run -d -p 8000:80 --name portfolio portfolio:latest
```

**Step 3:** Visit http://localhost:8000

## Full Build (Multi-stage)

If you have a stable internet connection, use the full Dockerfile:

```bash
docker build -t portfolio:latest .
docker run -d -p 8000:80 --name portfolio portfolio:latest
```

## Docker Compose (Includes PostgreSQL)

```bash
docker-compose up -d
```

Visit http://localhost:8000

## Stop/Remove

```bash
docker stop portfolio
docker rm portfolio
```

## Environment Variables

The Dockerfile will use `.env.example` if `.env` doesn't exist. To use custom environment:

```bash
docker run -d -p 8000:80 \
  -e APP_ENV=production \
  -e APP_DEBUG=false \
  --name portfolio portfolio:latest
```
