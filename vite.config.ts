import { URL, fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// Utilities
import type { ConfigEnv, UserConfigExport } from 'vite'

export function viteConfig({ mode }: ConfigEnv): UserConfigExport {
  console.log(mode)
  return {
    base: mode === 'development' ? '/' : '/vuetify-project/',
    envDir: './env',
    plugins: [
      vue({
        template: { transformAssetUrls },
      }),
      AutoImport({
        imports: ['vue', 'pinia', 'vue-i18n', 'vue-router', '@vueuse/core'],
        dts: 'custom/auto-imports.d.ts',
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
      }),
      Components({
        dirs: 'src/components',
        dts: 'custom/component.d.ts',
        deep: true,
      }),
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
      vuetify({
        autoImport: true,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
    },
    optimizeDeps: {
      include: ['vuetify'],
    },
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
    build: {
      emptyOutDir: true,
      outDir: 'vuetify-project',
      assetsDir: './',
      // copyPublicDir: true,
      // reportCompressedSize: true,
      chunkSizeWarningLimit: 500,
      // cssMinify: true,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
          compact: true,
        },
      },
    },
  }
}
export default viteConfig
