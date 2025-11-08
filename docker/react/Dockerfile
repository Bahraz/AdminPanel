# FROM node:20-bullseye

# WORKDIR /usr/src/app
# COPY package.json package-lock.json ./
# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ============================
# Etap 1: Development
# ============================
FROM node:20-alpine AS dev

# Ustaw katalog roboczy wewnątrz kontenera
WORKDIR /frontend

# Skopiuj package.json i package-lock.json z folderu konfiguracyjnego
COPY docker/react/package*.json .
COPY docker/react/vite.config.js .

# Zainstaluj zależności
RUN npm install

# Skopiuj kod aplikacji (frontend)
# Uwaga: ścieżka "app" odnosi się do katalogu na hoście
COPY ./app ./app

# Udostępnij port Vite (domyślnie 5173 lub 3000)
EXPOSE 3000

# Uruchom Vite w trybie developerskim
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ============================
# Etap 2: Production build
# ============================
FROM node:20-alpine AS build
WORKDIR /frontend

# Skopiuj package.json i zależności
COPY docker/react/package*.json .
COPY docker/react/vite.config.js .

RUN npm ci

# Skopiuj kod źródłowy
COPY ./app ./app

# Zbuduj projekt (build produkcyjny)
RUN npm run build

# ============================
# Etap 3: Serwowanie builda przez Nginx (opcjonalnie)
# ============================
# FROM nginx:alpine AS prod
# COPY --from=build /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
