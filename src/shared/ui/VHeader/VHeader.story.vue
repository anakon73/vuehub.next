<script setup lang='ts'>
import { VHeader } from '.'
</script>

<template>
  <Story title="Shared/UI/VHeader">
    <Variant title="default">
      <VHeader
        username="Username"
      />
    </Variant>
    <Variant title="with search">
      <VHeader
        with-search
        username="Username"
      />
    </Variant>
  </Story>
</template>
