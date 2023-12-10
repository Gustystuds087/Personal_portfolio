import { defineConfig } from 'vite'
// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    // You can add other build configurations here

    // Code splitting configuration
    chunkSizeWarningLimit: 1200, // Adjust this value as needed
    output: {
      manualChunks: {
        lodash: ['lodash']
      },
    },
  },
};
