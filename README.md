docker compose up -d --build

docker compose exec backend php artisan key:generate

docker compose exec backend php artisan migrate