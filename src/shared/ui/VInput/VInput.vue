<script setup lang='ts'>
import { useClasses } from '@/shared/lib/composables'
import type { styleVariants } from './types'

export type Props = {
  modelValue?: string
  styleVariant?: styleVariants
}

const props = defineProps<Props>()

const emits = defineEmits<{
  (e: 'update:modelValue'): void
}>()

const { modelValue: vModel } = useVModels(props, emits)
</script>

<template>
  <input
    v-model="vModel"
    :class="useClasses([
      'rounded-xl border bg-inherit px-4 py-3.5 focus:outline-none',
      styleVariant === 'white'
        && 'border-zinc-100 text-zinc-100 placeholder:text-zinc-100/50',
      styleVariant === 'black'
        && 'border-black text-black placeholder:text-black/50',
    ])
    "
    type="text"
  >
</template>
