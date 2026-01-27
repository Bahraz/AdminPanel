FROM node:20-alpine

WORKDIR /frontend

# MYK: Kopiujemy wszystkie pliki konfiguracyjne naraz (package.json, tsconfig, vite.config itp.)
COPY base/ ./

# Jeśli używasz pnpm lub yarn, dodaj też ich pliki blokady:
# COPY package-lock.json ./ 

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]