import { ss } from '@saofeng_cyber/pinia-sf-persistence-storage'
import type { ChatCompletionRequestMessage } from 'openai'

export type themeType = 'light' | 'dark'

export const Open_KEY = 'open_app'
export interface OpenState {
  apiKey: string
  openModel: string
  messages: Array<ChatCompletionRequestMessage>
}

export function GET_DEFAULT_SETTTING(): OpenState {
  return {
    apiKey: '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',
    openModel: 'gpt-3.5-turbo',
    messages: [],
  }
}
export function GET_APP_SETTING(): OpenState {
  return ss.getItem(Open_KEY) || GET_DEFAULT_SETTTING()
}

export function CLEAN_APP_SETTING() {
  ss.removeItem(Open_KEY)
}
export function SAVE_APP_STATE(state: OpenState) {
  ss.setItem(Open_KEY, state)
}
