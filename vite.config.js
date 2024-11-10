import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react-vite-gh-pages/',  // Asegúrate de reemplazar <react-vite-gh-pages> por el nombre de tu repositorio de GitHub
});