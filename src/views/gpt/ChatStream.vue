<script setup lang="ts">
interface Message {
  content: string
  role: 'user' | 'assistant'
  userName: string
}
const message = ref<string>('')
const messages = ref<Message[]>([])
function sendMessage() {
  console.log('sendMessage', message.value)
  messages.value.push(
    {
      content: message.value,
      role: 'user',
      userName: 'saofeng',
    },
    {
      content:
        'I\'m sorry, I do not understand what you are trying to communicate. Could you please provide more context or clarify your message?',
      role: 'assistant',
      userName: 'gpt',
    },
  )
}
function openSetting() {
  console.log('openSetting')
}
</script>

<template>
  <div style="height: calc(100vh - 160px)">
    <v-card height="100%" rounded="lg" class="pa-3">
      <div class="d-flex flex-column h-100">
        <div
          v-if="messages.length > 0"
          class="overflow-y-auto pa-2"
          style="flex: 1"
        >
          <template v-for="(item, index) in messages" :key="index">
            <div
              v-if="item.role === 'user'"
              class="d-flex flex-row-reverse align-center pa-6"
            >
              <div class="d-flex align-center">
                <v-card
                  rounded="sm"
                  class="gradient bg-deep-purple-darken-1"
                  theme="dark"
                  elevation="3"
                >
                  <v-card-text>
                    <b> {{ item.content }}</b>
                  </v-card-text>
                </v-card>
                <v-avatar
                  class="ml-4"
                  size="52"
                  variant="elevated"
                  image="https://img2.baidu.com/it/u=2587015716,2690889386&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                />
              </div>
            </div>
            <div v-else class="d-flex flex-row align-center pa-6">
              <v-avatar
                class="mr-4"
                size="52"
                image="https://img0.baidu.com/it/u=238452792,1045557508&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                variant="elevated"
              />
              <v-card rounded="sm" elevation="3">
                <v-card-text>
                  <b> {{ item.content }}</b>
                </v-card-text>
              </v-card>
            </div>
          </template>
        </div>
        <v-fab-transition mode="out-in" appear>
          <div
            v-if="messages.length <= 0"
            style="
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            "
          >
            <h1 class="text-h3 font-weight-bold text-deep-purple-darken-2">
              Ask Me Any
            </h1>
            <AnimationLottie
              animation-link="https://assets6.lottiefiles.com/packages/lf20_ofa3xwo7.json"
              :width="320"
              :height="320"
            />
          </div>
        </v-fab-transition>

        <v-card-actions>
          <v-sheet elevation="0" width="100%" class="my-2">
            <v-text-field
              v-model="message"
              variant="solo"
              active
              placeholder="输入你要发送的消息"
              hide-details
              color="primary"
              @keyup.enter="sendMessage"
            >
              <template #append-inner>
                <v-icon @click="sendMessage">
                  mdi-send
                </v-icon>
              </template>
              <template #append>
                <v-icon size="32" @click="openSetting">
                  mdi-cogs
                </v-icon>
              </template>
            </v-text-field>
          </v-sheet>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>
