import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      // Vite 5 still defaults to Sass's deprecated legacy JS API.
      scss: { api: 'modern-compiler' },
    },
  },
});
