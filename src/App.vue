<template>
  <v-app :theme="theme">
    <router-view />
  </v-app>
</template>

<script setup lang="ts">
import { appStore } from "@/store/app/app";
import { computed } from "vue";
const useApp = appStore();
const theme = computed(() => useApp.theme);
</script>
