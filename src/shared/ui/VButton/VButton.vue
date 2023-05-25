<!-- eslint-disable vue/no-dupe-keys -->
<script setup lang="ts">
import { useClasses } from '@/shared/lib/composables'

import type { styleVariants } from './types'

export interface Props {
  styleVariant?: styleVariants
}

defineProps<Props>()
</script>

<template>
  <button
    :class="useClasses(
      [
        'font-roboto text-xl font-light rounded-xl leading-6',
        styleVariant === 'regular' && 'bg-zinc-100',
        styleVariant === 'primary' && 'bg-blue-500 text-zinc-100',
        styleVariant === 'dark' && 'bg-neutral-800 text-zinc-100',
      ],
    )"
  >
    <slot />
  </button>
</template>
