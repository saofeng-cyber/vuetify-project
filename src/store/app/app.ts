// Utilities
import { defineStore } from 'pinia'
import type { AppState } from './help'
import { APP_KEY, GET_APP_SETTING } from './help'

export const appStore = defineStore('app', {
  state: (): AppState => GET_APP_SETTING(),
  actions: {
    changeTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    },
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen
    },
  },
  persist: {
    enable: true,
    key: APP_KEY,
    storageType: 'local',
  },
})
