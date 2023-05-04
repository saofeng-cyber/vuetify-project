import { RouteComponent } from "vue-router";

export const RouterPage: Record<RouterKey.RouterName, RouteComponent> = {
  workbench: () => import("@/views/home/DashBoard.vue"),
  chatGpt: () => import("@/views/gpt/ChatGpt.vue"),
  chatStream: () => import("@/views/gpt/ChatStream.vue"),
  userInfo: () => import("@/views/auth/UsersInfo.vue"),
};
