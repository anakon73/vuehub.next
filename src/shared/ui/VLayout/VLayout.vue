<script setup lang="ts">
import { VHeader } from '@/shared/ui/VHeader'

export type Props = {
  withSearch?: boolean
}

defineProps<Props>()
</script>

<template>
  <VHeader :with-search="withSearch" username="username" />
  <slot />
</template>
