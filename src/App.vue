<script setup lang="ts">
import { computed } from 'vue'
import { appStore } from '@/store/app/app'

const useApp = appStore()
const theme = computed(() => useApp.theme)
</script>

<template>
  <v-app :theme="theme">
    <router-view />
  </v-app>
</template>
