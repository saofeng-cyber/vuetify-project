<script lang="ts" setup>
import NavigationDrawer from "../main/NavigationDrawer.vue";
import AppBar from "../main/AppBar.vue";
import AppMain from "../main/AppMain.vue";
import SnackBar from "@/components/common/SnackBar.vue";
</script>
<template>
  <v-layout>
    <NavigationDrawer />
    <AppBar />
    <AppMain />
    <SnackBar />
  </v-layout>
</template>
<style scoped lang="scss"></style>
