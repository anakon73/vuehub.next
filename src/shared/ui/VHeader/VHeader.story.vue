<script setup lang='ts'>
import { VHeader } from '.'

const username = ref('Anakon73')
</script>

<template>
  <Story title="Shared/UI/VHeader">
    <Variant title="default">
      <VHeader :username="username" />
      <template #controls>
        <HstText v-model="username" />
      </template>
    </Variant>
  </Story>
</template>
