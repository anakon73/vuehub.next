<script setup lang="ts">
import { VLayout } from '.'
</script>

<template>
  <Story title="Shared/UI/VLayout">
    <Variant title="default">
      <VLayout>
        <div class="mt-10 text-center text-5xl text-red-500">
          Content
        </div>
      </VLayout>
    </Variant>
    <Variant title="with search">
      <VLayout>
        <div class="mt-10 text-center text-5xl text-red-500">
          Content
        </div>
      </VLayout>
    </Variant>
  </Story>
</template>
