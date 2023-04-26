<script setup lang="ts">
import { MyOpenAi } from "@/api/openai";
import { openAppStore } from "@/store/open/openApp";
import chatgptJson from "./animation/v1.json";
const useAppStore = openAppStore();
const { messages, apiKey } = storeToRefs(useAppStore);
const isLoading = ref<boolean>(false);
const isShow = ref<boolean>(false);
const errorMessage = ref<string>("");
const dialog = ref<boolean>(false);
const message = ref<string>("");
const myOpenAi = new MyOpenAi(apiKey.value, "gpt-3.5-turbo");
const sendMessage = async () => {
  if (!apiKey.value) {
    console.log("请先填写api_key");
    return;
  }

  isLoading.value = true;
  messages.value.push({
    role: "user",
    content: message.value,
  });
  try {
    const data = await myOpenAi.myChatCompletion(messages.value);
    if (data) {
      messages.value.push({
        content: data.choices[0].message!.content,
        role: "assistant",
      });
      useAppStore.storageMessages(messages.value);
    }
    message.value = "";
    isLoading.value = false;
  } catch (error: any) {
    isLoading.value = false;
    message.value = "";
    console.log(error);
    isShow.value = true;
    errorMessage.value = error.message;
  }
};
const saveOpenKey = () => {
  useAppStore.saveOpenAiKey(apiKey.value);
  myOpenAi.resetMyOpenAi({ key: apiKey.value, mode: "gpt-3.5-turbo" });
  dialog.value = false;
};

// Scroll to the bottom of the message container
const scrollToBottom = () => {
  const container = document.querySelector(".message-container");
  setTimeout(() => {
    container?.scrollTo({
      top: container?.scrollHeight,
    });
  }, 100);
};

watch(
  () => messages.value,
  (val) => {
    if (val) {
      scrollToBottom();
    }
  },
  {
    deep: true,
  }
);
</script>
<template>
  <div style="height: calc(100vh - 160px)">
    <v-card
      height="100%"
      rounded="lg"
      class="pa-3"
      :loading="isLoading"
      density="compact"
      position="relative"
    >
      <v-slide-y-transition>
        <v-alert
          v-if="isShow"
          :width="300"
          location="top"
          position="absolute"
          elevation="3"
          icon="mdi-alert"
          color="pink-accent-2"
          density="compact"
          closable
          style="z-index: 9; top: 12px"
        >
          {{ "Network Error" }}
        </v-alert>
      </v-slide-y-transition>
      <div class="d-flex flex-column h-100">
        <div
          v-if="messages.length > 0"
          class="message-container overflow-y-auto pa-2"
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
                  class="gradient bg-teal-darken-1"
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
            <h1 class="text-h3 font-weight-bold text-teal-darken-1">
              Chat With Me
            </h1>
            <AnimationLottie
              :animation-data="chatgptJson"
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
                <v-dialog v-model="dialog" max-width="600">
                  <template #activator="{ props }">
                    <v-icon size="32" color="primary" v-bind="props">
                      mdi-cogs
                    </v-icon>
                  </template>

                  <v-card
                    :border="true"
                    elevation="0"
                    variant="elevated"
                    rounded="lg"
                  >
                    <v-card-title>Input Your Api Key</v-card-title>
                    <v-divider class="my-4" />
                    <v-card-text>
                      <v-text-field
                        v-model="apiKey"
                        prepend-inner-icon="mdi-key"
                        label="your open apikey"
                        variant="outlined"
                        hide-details
                      ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        effect="dark"
                        color="primary"
                        variant="flat"
                        class="mx-auto"
                        @click="saveOpenKey"
                      >
                        保存
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </template>
            </v-text-field>
          </v-sheet>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>
