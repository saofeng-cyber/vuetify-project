// vite.config.ts
import vue from "file:///C:/Users/code_/Desktop/vuetify-project/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue@4.1.0_vite@4.3.1_vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vuetify, { transformAssetUrls } from "file:///C:/Users/code_/Desktop/vuetify-project/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-vuetify@1.0.2_vite@4.3.1_vue@3.2.47_vuetify@3.1.15/node_modules/vite-plugin-vuetify/dist/index.js";
import AutoImport from "file:///C:/Users/code_/Desktop/vuetify-project/node_modules/.pnpm/registry.npmmirror.com+unplugin-auto-import@0.15.3_@vueuse+core@10.1.0/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/code_/Desktop/vuetify-project/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-components@0.24.1_vue@3.2.47/node_modules/unplugin-vue-components/dist/vite.mjs";
import { fileURLToPath, URL } from "node:url";
var __vite_injected_original_import_meta_url = "file:///C:/Users/code_/Desktop/vuetify-project/vite.config.ts";
var viteConfig = ({ mode }) => {
  console.log(mode);
  return {
    base: mode === "development" ? "/" : "/vuetify-project/",
    envDir: "./env",
    plugins: [
      vue({
        template: { transformAssetUrls }
      }),
      AutoImport({
        imports: ["vue", "pinia", "vue-i18n", "vue-router", "@vueuse/core"],
        dts: "custom/auto-imports.d.ts",
        eslintrc: {
          enabled: true,
          filepath: "./.eslintrc-auto-import.json",
          globalsPropValue: true
        }
      }),
      Components({
        dirs: "src/components",
        dts: "custom/component.d.ts",
        deep: true
      }),
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
      vuetify({
        autoImport: true
      })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      },
      extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"]
    },
    css: {
      preprocessorOptions: {
        scss: {}
      }
    },
    server: {
      host: "0.0.0.0",
      port: 3e3
    },
    build: {
      emptyOutDir: true,
      outDir: "vuetify-project",
      assetsDir: "./",
      copyPublicDir: true,
      reportCompressedSize: true,
      chunkSizeWarningLimit: 500,
      cssMinify: true,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          chunkFileNames: "js/[name]-[hash].js",
          entryFileNames: "js/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash].[ext]",
          compact: true
        }
      }
    }
  };
};
var vite_config_default = viteConfig;
export {
  vite_config_default as default,
  viteConfig
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjb2RlX1xcXFxEZXNrdG9wXFxcXHZ1ZXRpZnktcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcY29kZV9cXFxcRGVza3RvcFxcXFx2dWV0aWZ5LXByb2plY3RcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2NvZGVfL0Rlc2t0b3AvdnVldGlmeS1wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgdnVldGlmeSwgeyB0cmFuc2Zvcm1Bc3NldFVybHMgfSBmcm9tIFwidml0ZS1wbHVnaW4tdnVldGlmeVwiO1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSBcInVucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGVcIjtcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlXCI7XG4vLyBVdGlsaXRpZXNcbmltcG9ydCB7IENvbmZpZ0VudiwgVXNlckNvbmZpZ0V4cG9ydCB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tIFwibm9kZTp1cmxcIjtcblxuZXhwb3J0IGNvbnN0IHZpdGVDb25maWcgPSAoeyBtb2RlIH06IENvbmZpZ0Vudik6IFVzZXJDb25maWdFeHBvcnQgPT4ge1xuICBjb25zb2xlLmxvZyhtb2RlKTtcbiAgcmV0dXJuIHtcbiAgICBiYXNlOiBtb2RlID09PSBcImRldmVsb3BtZW50XCIgPyBcIi9cIiA6IFwiL3Z1ZXRpZnktcHJvamVjdC9cIixcbiAgICBlbnZEaXI6IFwiLi9lbnZcIixcbiAgICBwbHVnaW5zOiBbXG4gICAgICB2dWUoe1xuICAgICAgICB0ZW1wbGF0ZTogeyB0cmFuc2Zvcm1Bc3NldFVybHMgfSxcbiAgICAgIH0pLFxuICAgICAgQXV0b0ltcG9ydCh7XG4gICAgICAgIGltcG9ydHM6IFtcInZ1ZVwiLCBcInBpbmlhXCIsIFwidnVlLWkxOG5cIiwgXCJ2dWUtcm91dGVyXCIsIFwiQHZ1ZXVzZS9jb3JlXCJdLFxuICAgICAgICBkdHM6IFwiY3VzdG9tL2F1dG8taW1wb3J0cy5kLnRzXCIsXG4gICAgICAgIGVzbGludHJjOiB7XG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBmaWxlcGF0aDogXCIuLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uXCIsXG4gICAgICAgICAgZ2xvYmFsc1Byb3BWYWx1ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgQ29tcG9uZW50cyh7XG4gICAgICAgIGRpcnM6IFwic3JjL2NvbXBvbmVudHNcIixcbiAgICAgICAgZHRzOiBcImN1c3RvbS9jb21wb25lbnQuZC50c1wiLFxuICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgfSksXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVldGlmeWpzL3Z1ZXRpZnktbG9hZGVyL3RyZWUvbmV4dC9wYWNrYWdlcy92aXRlLXBsdWdpblxuICAgICAgdnVldGlmeSh7XG4gICAgICAgIGF1dG9JbXBvcnQ6IHRydWUsXG4gICAgICB9KSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgIFwiQFwiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyY1wiLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgIH0sXG4gICAgICBleHRlbnNpb25zOiBbXCIuanNcIiwgXCIuanNvblwiLCBcIi5qc3hcIiwgXCIubWpzXCIsIFwiLnRzXCIsIFwiLnRzeFwiLCBcIi52dWVcIl0sXG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgc2Nzczoge30sXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICBob3N0OiBcIjAuMC4wLjBcIixcbiAgICAgIHBvcnQ6IDMwMDAsXG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgICBvdXREaXI6IFwidnVldGlmeS1wcm9qZWN0XCIsXG4gICAgICBhc3NldHNEaXI6IFwiLi9cIixcbiAgICAgIGNvcHlQdWJsaWNEaXI6IHRydWUsXG4gICAgICByZXBvcnRDb21wcmVzc2VkU2l6ZTogdHJ1ZSxcbiAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogNTAwLFxuICAgICAgY3NzTWluaWZ5OiB0cnVlLFxuICAgICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBjaHVua0ZpbGVOYW1lczogXCJqcy9bbmFtZV0tW2hhc2hdLmpzXCIsXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwianMvW25hbWVdLVtoYXNoXS5qc1wiLFxuICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiBcImFzc2V0cy9bbmFtZV0tW2hhc2hdLltleHRdXCIsXG4gICAgICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCB2aXRlQ29uZmlnO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4UyxPQUFPLFNBQVM7QUFDOVQsT0FBTyxXQUFXLDBCQUEwQjtBQUM1QyxPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUd2QixTQUFTLGVBQWUsV0FBVztBQU4wSixJQUFNLDJDQUEyQztBQVF2TyxJQUFNLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBbUM7QUFDbkUsVUFBUSxJQUFJLElBQUk7QUFDaEIsU0FBTztBQUFBLElBQ0wsTUFBTSxTQUFTLGdCQUFnQixNQUFNO0FBQUEsSUFDckMsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLFFBQ0YsVUFBVSxFQUFFLG1CQUFtQjtBQUFBLE1BQ2pDLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNULFNBQVMsQ0FBQyxPQUFPLFNBQVMsWUFBWSxjQUFjLGNBQWM7QUFBQSxRQUNsRSxLQUFLO0FBQUEsUUFDTCxVQUFVO0FBQUEsVUFDUixTQUFTO0FBQUEsVUFDVCxVQUFVO0FBQUEsVUFDVixrQkFBa0I7QUFBQSxRQUNwQjtBQUFBLE1BQ0YsQ0FBQztBQUFBLE1BQ0QsV0FBVztBQUFBLFFBQ1QsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLE1BQ1IsQ0FBQztBQUFBO0FBQUEsTUFFRCxRQUFRO0FBQUEsUUFDTixZQUFZO0FBQUEsTUFDZCxDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUN0RDtBQUFBLE1BQ0EsWUFBWSxDQUFDLE9BQU8sU0FBUyxRQUFRLFFBQVEsT0FBTyxRQUFRLE1BQU07QUFBQSxJQUNwRTtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gscUJBQXFCO0FBQUEsUUFDbkIsTUFBTSxDQUFDO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxhQUFhO0FBQUEsTUFDYixRQUFRO0FBQUEsTUFDUixXQUFXO0FBQUEsTUFDWCxlQUFlO0FBQUEsTUFDZixzQkFBc0I7QUFBQSxNQUN0Qix1QkFBdUI7QUFBQSxNQUN2QixXQUFXO0FBQUEsTUFDWCxjQUFjO0FBQUEsTUFDZCxlQUFlO0FBQUEsUUFDYixRQUFRO0FBQUEsVUFDTixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxVQUNoQixTQUFTO0FBQUEsUUFDWDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBQ0EsSUFBTyxzQkFBUTsiLAogICJuYW1lcyI6IFtdCn0K
