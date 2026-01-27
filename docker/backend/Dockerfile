FROM php:8.4-fpm

# Instalacja systemowa
RUN apt-get update && apt-get install -y \
    libpng-dev libonig-dev libxml2-dev zip unzip curl

RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /backend

# 1. Instalacja zależności (cache'owanie warstwy composer)
COPY docker/backend/base/composer.json docker/backend/base/composer.lock ./

RUN composer install --no-interaction --no-scripts --no-autoloader

# 2. Kopiowanie szkieletu i konfiguracji
COPY .env ./
COPY docker/backend/base/ ./ 

# 3. Kopiowanie kluczowych folderów Laravela
COPY bootstrap/ ./bootstrap/
COPY database/ ./database/
COPY routes/ ./routes/
COPY tests/ ./tests/

# 4. Kopiowanie Twojego kodu (src -> app)
COPY src/ ./app/

# --- KLUCZOWY FIX ---
# Tworzymy brakujące foldery, żeby chown ich nie szukał na darmo
RUN mkdir -p storage/framework/cache storage/framework/sessions storage/framework/views storage/logs bootstrap/cache
# --------------------

RUN rm -rf bootstrap/cache/*.php

# 5. Autoloader (z no-scripts, żeby nie odpalać artisan przy budowaniu)
RUN composer dump-autoload --no-scripts

# RUN php artisan key:generate

# 6. Uprawnienia
RUN chown -R www-data:www-data /backend/storage /backend/bootstrap/cache

EXPOSE 9000
CMD ["php-fpm"]