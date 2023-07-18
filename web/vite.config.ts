import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      public: `${path.resolve(__dirname, "./public/")}`,
      assets: path.resolve(__dirname, "./src/assets"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      contexts: path.resolve(__dirname, "./src/contexts"),
      lib: path.resolve(__dirname, "./src/libs"),
      pages: path.resolve(__dirname, "./src/pages"),
      routes: path.resolve(__dirname, "./src/routes"),
      styles: path.resolve(__dirname, "./src/styles"),
      types: path.resolve(__dirname, "./src/@types"),
      utils: path.resolve(__dirname, "./src/utils"),
    },
  },
})