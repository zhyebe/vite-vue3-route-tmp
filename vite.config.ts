/*
 * @Author: danielZhang
 * @Date: 2024-04-08 16:11:36
 * @Description: Description
 * @FilePath: /vite-vue3/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

function resolve(dir: string) {
  return path.join(__dirname, dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': resolve('./src'),
      '@assets': resolve('./src/assets'),
      '@common': resolve('./src/common'),
      '@components': resolve('./src/components'),
      '@store': resolve('./src/store'),
      '@views': resolve('./src/views'),
      '@routes': resolve('./src/routes'),
      '@hooks': resolve('./src/hooks'),
      '@styles': resolve('./src/styles'),
      '@network': resolve('./src/network'),
      '@utils': resolve('./src/utils')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
