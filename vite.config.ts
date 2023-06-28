import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

export default defineConfig({
// 静态资源基础路径 base: './' || '', 相当于assetsPublicPath 
  base: './',
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  envDir: "./env", // 环境变量存储位置
  plugins: [
    vue()
  ],
  server: {
    port: 9000, //启动端口
    hmr: {
      host: 'localhost',
      port: 9000
    },
    // 设置代理
    proxy: {
      // 文字生图
      '/api': {
        target: 'https://stablediffusionapi.com',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '/api/v3/text2img')
      },
      // 图生图
      '/img-api': {
        target: 'https://stablediffusionapi.com',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/img-api/, '/api/v3/img2img')
      },
    }
  }
});