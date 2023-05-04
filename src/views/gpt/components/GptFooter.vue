<script setup lang="ts">
import { MyOpenAi } from "@/api/openai";
import { openAppStore } from "@/store/open/openApp";
import { snackBarStore } from "@/store/snackBar/snack";
import { WebSocketClient } from "@/utils/websocket/client";

const wss = new WebSocketClient("ws://localhost:8080");
wss.connect().then(() => {
  wss.send({ type: "ping", name: "saofeng" });
  wss.receive().then((data) => {
    console.log(data);
  });
});
const useSnackBar = snackBarStore();
const useAppStore = openAppStore();
const apiKey = ref<string>(useAppStore.apiKey);
const apiModel = ref<string>(useAppStore.openModel);
const message = ref<string>("");
const { messages } = storeToRefs(useAppStore);
const dialog = ref<boolean>(false);
const isSeePaw = ref<boolean>(false);
const myOpenAi = new MyOpenAi(apiKey.value, apiModel.value);
/**
 * 通过emit定义一个方法控制父组件滚动条
 */
const emit = defineEmits<{
  (event: "updateLoading", loading: boolean): void;
}>();
const saveOpenKey = () => {
  useAppStore.saveOpenAiKey(apiKey.value);
  useAppStore.saveOpenModel(apiModel.value);
  myOpenAi.resetMyOpenAi({ key: apiKey.value, mode: apiModel.value });
  useSnackBar.showSucessMsg("保存成功");
  dialog.value = false;
};
const sendMessage = async () => {
  if (!apiKey.value) {
    useSnackBar.showWarningMsg("请先填写api_key");
    dialog.value = true;
    return;
  }

  emit("updateLoading", true);
  messages.value.push({
    role: "user",
    content: message.value,
  });
  try {
    const data = await myOpenAi.myChatCompletion(messages.value);
    if (data) {
      const content = data.choices[0].message!.content.replace(/\n/g, "<br>");
      messages.value.push({
        content: content,
        role: "assistant",
      });
    }
    wss.send(data.choices[0].message);
    message.value = "";
    emit("updateLoading", false);
  } catch (error: any) {
    emit("updateLoading", false);
    message.value = "";
    console.log(error);
    useSnackBar.showErrorMsg(error.message);
  }
};
</script>
<template>
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
        <v-dialog v-model="dialog" max-width="600" shadow>
          <template #activator="{ props }">
            <!-- <v-icon size="50" v-bind="props" class="mt-n3"> -->
            <sf-icon
              v-bind="props"
              width="50"
              class="mt-n3 v-icon--clickable"
              icon="ri:openai-fill"
            />
          </template>

          <v-card :border="true" elevation="0" variant="elevated" rounded="lg">
            <v-card-title>Input Your Api Key</v-card-title>
            <v-card-subtitle>
              小提示：设置成功，并不代表您的key有余额或者正确
              <br />
              点击这个网址进行检查：
              <v-chip
                color="teal-darken-3"
                link
                variant="text"
                href="https://open.aihao123.cn/"
                target="_blank"
                >openkey余额查询
              </v-chip>
            </v-card-subtitle>
            <v-divider class="my-4" />
            <v-card-text>
              <v-text-field
                v-model="apiKey"
                prepend-inner-icon="mdi-key"
                :append-icon="isSeePaw ? 'mdi-eye' : 'mdi-eye-off'"
                label="your open apikey"
                variant="outlined"
                :type="isSeePaw ? 'text' : 'password'"
                hide-details
                clearable
                counter
                @click:append="isSeePaw = !isSeePaw"
              ></v-text-field>
              <v-divider class="my-4" />
              <v-text-field
                v-model="apiModel"
                label="your open model"
                variant="outlined"
                hide-details
              >
                <template #prepend-inner>
                  <v-icon size="36" class="mt-n1">
                    <sf-icon class="v-icon--clickable" icon="ri:openai-fill" />
                  </v-icon>
                </template>
              </v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                effect="dark"
                color="primary"
                prepend-icon="mdi-content-save-check"
                variant="flat"
                class="mx-auto"
                @click="saveOpenKey"
              >
                SAVE
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
    </v-text-field>
  </v-sheet>
</template>
