import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist'
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://arsalan-estate-backend.vercel.app/', 
        secure: false,
      },
    },
  },

  plugins: [react()],
});
