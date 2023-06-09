import type { ChatCompletionRequestMessage } from 'openai'
import type { OpenState } from './help'
import {
  CLEAN_APP_SETTING,
  GET_APP_SETTING,
  Open_KEY,
} from './help'

export const openAppStore = defineStore('openApp', {
  state: (): OpenState => GET_APP_SETTING(),
  actions: {
    storageMessages(messages: Array<ChatCompletionRequestMessage>) {
      this.messages = messages
    },
    saveOpenAiKey(apiKey: string) {
      this.apiKey = apiKey
    },
    saveOpenModel(openModel: string) {
      this.openModel = openModel
    },
    clearOpenMessages() {
      CLEAN_APP_SETTING()
      this.messages = []
    },
  },
  persist: {
    enable: true,
    key: Open_KEY,
    storageType: 'local',
  },
})
