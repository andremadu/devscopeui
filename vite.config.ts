import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separa as dependências externas num bundle próprio
          }
        }
      }
    },
    chunkSizeWarningLimit: 2000 // Aumenta o limite para 2MB para evitar avisos
  }
});
