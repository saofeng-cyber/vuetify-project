<script setup lang="ts">
import LineChart from "@/echarts/components/LineChart.vue";
</script>
<template>
  <v-card class="pa-4" :border="true" theme="dark">
    <v-card-title>
      <div class="d-flex justify-space-between mb-4">
        <span class="text-h5" style="font-weight: bold">Sales</span>
        <v-btn variant="text"> View Report </v-btn>
      </div>
    </v-card-title>
    <div class="d-flex justify-space-between align-center">
      <p class="text-h4">$26,358.49</p>
      <p class="font-weight-bold text-success">
        <v-icon icon="mdi-trending-up" size="32" />
        <span class="ml-2">3.2%</span>
      </p>
    </div>
    <div style="height: 160px; width: 100%">
      <LineChart />
    </div>
  </v-card>
</template>
