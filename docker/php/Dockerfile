# FROM php:8.2-fpm

# WORKDIR /var/www/html

# RUN docker-php-ext-install pdo pdo_mysql

# COPY ./php.ini /usr/local/etc/php/php.ini


FROM php:8.4-fpm

# Ustaw roboczy katalog wewnątrz kontenera
WORKDIR /backend

# Zainstaluj zależności systemowe i rozszerzenia PHP
RUN apt-get update && apt-get install -y unzip git \
    && docker-php-ext-install pdo pdo_mysql

# Skopiuj konfigurację PHP
COPY ./docker/php/php.ini /usr/local/etc/php/php.ini

# Skopiuj plik composer.json i ewentualnie composer.lock z folderu docker/php
COPY ./docker/php/composer.json ./

# Zainstaluj Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Zainstaluj zależności projektu (jeśli composer.json jest pusty, to nie wywoła błędu)
RUN composer install --no-interaction --no-scripts --no-autoloader || true

# Skopiuj właściwy kod backendu
COPY ./src ./src

# Uruchom autoloader
RUN composer dump-autoload --optimize

CMD ["php-fpm"]
