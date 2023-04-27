<script setup lang="ts">
import GptFooter from "./GptFooter.vue";
import chatgptJson from "../animation/v1.json";
import { openAppStore } from "@/store/open/openApp";
import { snackBarStore } from "@/store/snackBar/snack";
const useSnackBar = snackBarStore();
const useAppStore = openAppStore();
const { messages } = storeToRefs(useAppStore);
const isLoading = ref<boolean>(false);
const updateLoading = (loading: boolean) => {
  console.log(666);
  isLoading.value = loading;
};
const scrollToBottom = () => {
  const container = document.querySelector(".message-container");
  setTimeout(() => {
    container?.scrollTo({
      top: container?.scrollHeight,
    });
  }, 20);
};

watch(
  () => messages.value,
  (val) => {
    if (val) {
      scrollToBottom();
    }
    if (val.length >= 30) {
      useSnackBar.showInfoMsg("累计会话已达30次，建议您重新建立新的会话");
    }
  },
  {
    deep: true,
  }
);
onMounted(() => {
  scrollToBottom();
});
</script>
<template>
  <v-card
    height="100%"
    rounded="lg"
    class="pa-3"
    :loading="isLoading"
    density="compact"
    position="relative"
  >
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
      <GptFooter @update-loading="updateLoading" />
    </div>
  </v-card>
</template>
