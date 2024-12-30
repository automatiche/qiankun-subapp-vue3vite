import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun('app-vue3', {
      useDevMode: true
    }),
    legacy({
      targets: ['defaults', 'not IE 11', 'chrome >= 49'], // 设置目标浏览器版本
      // additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  server: {
    port: 7001,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
