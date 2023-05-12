<script setup lang="ts">
import 'highlight.js/styles/base16/ir-black.css'
import Markdown from 'vue3-markdown-it'

defineProps({
  content: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <Markdown :source="content" :breaks="true" />
</template>
