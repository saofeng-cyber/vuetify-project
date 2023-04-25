<script setup lang="ts">
const route = useRoute();
const breadcrumbs = ref<any>([]);
watch(
  () => route.path,
  () => {
    console.log(route.matched);
    const matched = route.matched
    breadcrumbs.value = [
      {
        title: matched[0].meta?.title,
        disable: false,
        // href: matched[0].path,
      },
      {
        title: matched[1].meta?.title,
        disable: true,
        // href: matched[1].path,
      }
    ];
  },
  {
    immediate: true,
    deep: true
  }
);
</script>
<template>
  <v-breadcrumbs :items="breadcrumbs" divider="/"></v-breadcrumbs>
</template>
