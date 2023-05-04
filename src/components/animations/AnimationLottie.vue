<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";

interface Prop {
  animationLink?: string;
  animationData?: any;
  height?: number;
  width?: number;
}
withDefaults(defineProps<Prop>(), {
  animationLink: "",
  animationData: null,
  height: 200,
  width: 200,
});
</script>
<template>
  <Vue3Lottie
    :animation-data="animationData"
    :animation-link="animationLink"
    :height="height"
    :width="width"
  />
</template>
