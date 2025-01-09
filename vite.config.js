import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['imagesloaded'], // Treat this dependency as external
    },
  },
});
