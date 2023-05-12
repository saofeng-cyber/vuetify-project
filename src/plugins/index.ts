/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { myPiniaStoragePlugin } from '@saofeng_cyber/pinia-sf-persistence-storage'
import { Icon } from '@iconify/vue'
import type { App } from 'vue'
import pinia from '../store'
import router from '../router'
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import AnimationLottieVue from '@/components/animations/AnimationLottie.vue'

// Types

export function registerPlugins(app: App) {
  loadFonts()
  pinia.use(myPiniaStoragePlugin)
  app.use(vuetify).use(router).use(pinia)
  app.component('SfIcon', Icon)
  app.component('AnimationLottie', AnimationLottieVue)
}
