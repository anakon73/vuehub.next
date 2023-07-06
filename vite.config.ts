import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import pluginRewriteAll from 'vite-plugin-rewrite-all'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: true,
      eslintrc: {
        enabled: true,
      },
      imports: [
        'vue',
        '@vueuse/core',
        {
          'tailwind-merge': ['twMerge'],
        },
      ],
    }),
    pluginRewriteAll(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
