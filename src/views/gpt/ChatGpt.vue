<script setup lang="ts">
interface Message {
  content: string;
  role: "user" | "assistant";
  userName: string;
}
const message = ref<string>("");
const messages = ref<Message[]>([]);
const sendMessage = () => {
  console.log("sendMessage", message.value);
  messages.value.push(
    {
      content: message.value,
      role: "user",
      userName: "saofeng",
    },
    {
      content:
        "I'm sorry, I do not understand what you are trying to communicate. Could you please provide more context or clarify your message?",
      role: "assistant",
      userName: "gpt",
    }
  );
};
const openSetting = () => {
  console.log("openSetting");
};
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
          <template v-for="message in messages">
            <div
              v-if="message.role === 'user'"
              class="d-flex flex-row-reverse align-center pa-6"
            >
              <div class="d-flex align-center">
                <v-card
                  rounded="sm"
                  class="gradient bg-teal-darken-1"
                  theme="dark"
                  elevation="3"
                >
                  <v-card-text>
                    <b> {{ message.content }}</b>
                  </v-card-text>
                </v-card>
                <v-avatar
                  class="ml-4"
                  size="52"
                  variant="elevated"
                  image="https://img1.baidu.com/it/u=2224626416,1339361255&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500"
                />
              </div>
            </div>
            <div v-else class="d-flex flex-row align-center pa-6">
              <v-avatar
                class="mr-4"
                size="52"
                image="https://img1.baidu.com/it/u=1034644778,3403874760&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=498"
                variant="elevated"
              />
              <v-card rounded="sm" elevation="3">
                <v-card-text>
                  <b> {{ message.content }}</b>
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
            <h1 class="text-h3 font-weight-bold text-teal-darken-1">
              Chat With Me
            </h1>
            <AnimationLottie
              animation-link="https://assets3.lottiefiles.com/packages/lf20_rvet3w58.json"
              :width="320"
              :height="320"
            />
          </div>
        </v-fab-transition>

        <v-card-actions>
          <v-sheet elevation="0" width="100%" class="my-2">
            <v-text-field
              ref="input"
              variant="solo"
              v-model="message"
              placeholder="输入你要发送的消息"
              hide-details
              color="primary"
              @keyup.enter="sendMessage"
            >
              <template #append-inner>
                <v-icon @click="sendMessage"> mdi-send </v-icon>
              </template>
              <template #append>
                <v-icon size="32" @click="openSetting"> mdi-cogs </v-icon>
              </template>
            </v-text-field>
          </v-sheet>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>
