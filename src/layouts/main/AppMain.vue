<script setup lang="ts">
import Breadcrumb from "./Breadcrumb.vue";
</script>
<template>
  <v-main scrollable>
    <v-container fluid>
      <Breadcrumb />
      <router-view v-slot="{ Component }">
        <!-- 添加路由过渡动画 -->
        <v-slide-x-transition mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </v-slide-x-transition>
      </router-view>
    </v-container>
  </v-main>
</template>
<style scoped lang="scss"></style>
