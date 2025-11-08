import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: 'app',
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // pozwala na dostęp z localhost:3000 w Dockerze
    port: 3000,
      proxy: {
    '/api': 'http://php_backend_serv'
  }
}
});
