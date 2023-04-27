<script setup lang="ts">
import { snackBarStore } from "@/store/snackBar/snack";
const useSnackBar = snackBarStore();
const { isShow, timeout, snackColor, snackLocation, msg } =
  storeToRefs(useSnackBar);
</script>
<template>
  <v-snackbar
    :color="snackColor"
    v-model="isShow"
    :timeout="timeout"
    :location="snackLocation"
    rounded="lg"
    elevation="10"
    multi-line
  >
    {{ msg }}
    <template #actions>
      <v-btn icon variant="text" @click="isShow = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>
