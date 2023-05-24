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
    <Variant title="home page">
      <VHeader
        home-page
        username="Username"
      />
    </Variant>
  </Story>
</template>
