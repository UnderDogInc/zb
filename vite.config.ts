import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000
  },
  css:{
    preprocessorOptions: {
      css: {
        additionalData: '@import "./src/app/styles/index.css"',
      },
    },
  },
  resolve: {
    extensions: [".ts", ".vue", ".css", ".js"],
    alias: {
      "~": fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
})
