import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    // L'HMR e disattivabile via DISABLE_HMR per evitare flicker durante le
    // modifiche automatiche; in locale resta attivo.
    hmr: process.env.DISABLE_HMR !== 'true',
  },
});
