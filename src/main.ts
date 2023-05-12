/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
// Components
import '@/styles/main.scss'

// Composables
import { createApp } from 'vue'
import App from './App.vue'
import { registerPlugins } from '@/plugins'

const app = createApp(App)
registerPlugins(app)

app.mount('#app')
