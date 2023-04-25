/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import pinia from "../store";
import router from "../router";
// import { myPiniaStoragePlugin } from "@/utils/piniaStoragePlugin";
import { myPiniaStoragePlugin } from "@saofeng_cyber/pinia-sf-persistence-storage";
import AnimationLottieVue from "@/components/animations/AnimationLottie.vue";

// Types
import type { App } from "vue";

export function registerPlugins(app: App) {
  loadFonts();
  pinia.use(myPiniaStoragePlugin);
  app.use(vuetify).use(router).use(pinia);
  app.component("AnimationLottie", AnimationLottieVue);
}
