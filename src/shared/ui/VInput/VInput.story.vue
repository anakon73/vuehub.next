<script setup lang='ts'>
import { VInput } from '.'

const query = ref('')
</script>

<template>
  <Story title="Shared/UI/VInput">
    <Variant title="black">
      <VInput
        v-model:model-value="query"
        placeholder="input"
        style-variant="black"
      />
    </Variant>
    <Variant title="white">
      <VInput
        v-model:model-value="query"
        placeholder="input"
        style-variant="white"
      />
    </Variant>
  </Story>
</template>
