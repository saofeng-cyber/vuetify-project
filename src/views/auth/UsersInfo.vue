<script setup lang="ts">
const data = ref([
  {
    key: "name",
    value: "丢批犯",
  },
  {
    key: "age",
    value: 24,
  },
  {
    key: "from",
    value: "数据平台",
  },
]);
</script>
<template>
  <v-card>
    <v-card-title>Users Info</v-card-title>
    <v-card-text>
      <v-banner v-for="item in data" :key="item.key" lines="one">
        <template #prepend>
          <v-avatar color="brown" size="42">
            <span class="text-h5">SF</span>
          </v-avatar>
        </template>
        <v-banner-text>
          {{ item.value }}
        </v-banner-text>
        <v-banner-actions>
          <v-btn variant="elevated">{{ item.key }}</v-btn>
        </v-banner-actions>
      </v-banner>
    </v-card-text>
  </v-card>
</template>
