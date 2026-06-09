import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@components-new': path.resolve(__dirname, './src/components-new'),
      '@assets-new': path.resolve(__dirname, './src/assets-new'),
      '@pages-new': path.resolve(__dirname, './src/pages-new'),
    },
  },
})
