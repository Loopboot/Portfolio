# Portfolio Laravel Project – Quick Walkthrough

## 1. Framework & Structure
- This is a Laravel application (latest docs: https://laravel.com/docs) using the standard directory layout.
- Key folders:
  - `app/` – Application logic (controllers, models, middleware, etc.).
  - `config/` – Configuration files (including `config/database.php`).
  - `routes/` – HTTP route definitions.
  - `resources/` – Frontend views and Inertia / Vite-driven assets.
  - `database/` – Migrations, seeders, and factories.

## 2. Environment & Configuration
- Runtime configuration is managed via `.env` (environment-based configuration, as per Laravel docs).
- Important variables in this project:
  - `APP_NAME`, `APP_ENV`, `APP_DEBUG`, `APP_URL` – core app settings.
  - `DB_CONNECTION=postgres` – tells Laravel to use the `pgsql` connection from `config/database.php`.
  - `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD` – database connection details (wired to your Postgres Docker service).
- `config/database.php` reads these values with `env()` and defines connections for sqlite, mysql, mariadb, pgsql, and sqlsrv.

## 3. HTTP Routing
- Web routes live in `routes/web.php`.
- Currently defined route:
  - `GET /` → returns an Inertia page: `Inertia::render('welcome')`, named route `home`.
- Laravel’s router sends incoming HTTP requests to these route definitions, which can be simple closures (like this project) or controller actions.

## 4. Frontend Rendering with Inertia
- The root route uses Inertia: `Inertia::render('welcome')`.
- Inertia bridges Laravel and a modern frontend (typically Vue/React/Svelte) so that:
  - Backend returns page components instead of Blade views.
  - Frontend pages are typically located under `resources/js/Pages` (e.g., a `welcome` component).
- Vite handles bundling of these assets, configured via `vite.config.ts`.

## 5. Database & Migrations
- With `DB_CONNECTION=postgres`, Laravel uses the `pgsql` driver defined in `config/database.php`.
- Database schema is managed with migrations stored in `database/migrations`.
- Typical workflow:
  1. Define or update migration files.
  2. Run `php artisan migrate` to apply them to the Postgres database.

## 6. Running the App (High-Level)
- Ensure Docker Postgres is running (from project root):
  - `docker compose up -d postgres`
- Start the Laravel dev server:
  - `php artisan serve` (or run via your preferred PHP server).
- Visit the app in your browser (default `http://localhost:8000`) to hit `/` and load the Inertia `welcome` page.

## 7. Extending the Project
- Add new pages:
  - Define new routes in `routes/web.php`.
  - Back them with controllers in `app/Http/Controllers` if needed.
  - Create corresponding Inertia components in `resources/js/Pages`.
- Work with the database:
  - Create models with `php artisan make:model`.
  - Create and run migrations with `php artisan make:migration` and `php artisan migrate`.
- For deeper details on any of these steps, refer to the official Laravel documentation at https://laravel.com/docs.
