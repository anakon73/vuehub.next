<!-- eslint-disable vue/no-dupe-keys -->
<script setup lang="ts">
import type { styleVariants } from './types'

export interface Props {
  styleVariant?: styleVariants
  class?: string
}

const props = defineProps<Props>()

const classes = computed(() => {
  return twMerge([
    'font-roboto text-xl font-light rounded-xl leading-6',
    props.styleVariant === 'regular' && 'bg-zinc-100',
    props.styleVariant === 'primary' && 'bg-blue-500 text-zinc-100',
    props.styleVariant === 'dark' && 'bg-neutral-800 text-zinc-100',
    props.class,
  ])
})
</script>

<template>
  <button
    :class="classes"
  >
    <slot />
  </button>
</template>
