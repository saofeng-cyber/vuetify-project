<script setup lang="ts">
import { appStore } from "@/store/app/app";
const useApp = appStore();
const theme = computed(() => useApp.theme === "light");
const changeDrawer = () => {
  useApp.toggleDrawer();
};
const toggleTheme = () => {
  useApp.changeTheme();
};
</script>
<template>
  <v-app-bar order="0">
    <v-app-bar-nav-icon variant="text" @click.stop="changeDrawer">
    </v-app-bar-nav-icon>
    <v-toolbar-title>Vuetify Admin By S.F</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon icon="mdi-magnify"></v-icon>
    </v-btn>

    <v-btn icon @click="toggleTheme">
      <v-fab-transition mode="out-in">
        <v-icon v-if="theme" icon="mdi-weather-sunset-up"></v-icon>
        <v-icon v-else icon="mdi-weather-night"></v-icon>
      </v-fab-transition>
    </v-btn>

    <v-btn icon>
      <v-icon icon="mdi-dots-vertical"></v-icon>
    </v-btn>
  </v-app-bar>
</template>
