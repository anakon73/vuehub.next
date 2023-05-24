<script setup lang='ts'>
import { VSearchInput } from './index.js'

const query = ref('')
</script>

<template>
  <Story title="Shared/UI/VSearchInput">
    <VSearchInput v-model:model-value="query" />
  </Story>
</template>
