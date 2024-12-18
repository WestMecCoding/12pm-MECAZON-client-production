// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    proxy: {
      // Proxy API requests when in development
      '/api': {
        target: "https://automatic-space-palm-tree-g4qr6jx5jwr9cw6pg-3000.app.github.dev/" || 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});