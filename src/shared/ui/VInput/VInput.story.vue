<script setup lang='ts'>
import { VInput } from '.'

const query = ref('')
</script>

<template>
  <Story title="Shared/UI/VInput">
    <VInput v-model:model-value="query" />
  </Story>
</template>
