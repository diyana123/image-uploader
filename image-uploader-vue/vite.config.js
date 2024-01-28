import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  build :{
    lib:{
      entry:path.resolve(__dirname,'src/index.js'),
      name:"image-uploader-vue",
      fileName:(format)=>`${format}.js`
    }

  },
  rollupOptions:{
    external:["vue"],
    output:{
      globals:{
        vue:"Vue"
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
