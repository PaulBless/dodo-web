import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  base: './'
})
