import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ isSsrBuild }) => ({
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
  // manualChunks solo sul build client (lo split vendor migliora il caching);
  // sul build SSR non serve e potrebbe interferire.
  build: isSsrBuild
    ? {}
    : {
        rollupOptions: {
          output: {
            manualChunks(id: string) {
              if (!id.includes('node_modules')) return;
              if (id.includes('@unhead') || id.includes('hookable')) return 'unhead';
              if (id.includes('lucide-react')) return 'icons';
              if (
                id.includes('react-router') ||
                id.includes('react-dom') ||
                id.includes('/react/') ||
                id.includes('react/jsx-runtime') ||
                id.includes('scheduler')
              ) {
                return 'react-vendor';
              }
            },
          },
        },
      },
}));
