<script setup lang="ts">
import { useClasses } from '@/shared/lib/composables'

export type Props = {
  modelValue: string
}

const { modelValue } = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const buttons = [
  {
    label: 'Starred',
    value: 'starred',
  },
  {
    label: 'Repositories',
    value: 'own',
  },
]

function onChange(event: Event) {
  if (event.target instanceof HTMLInputElement) {
    const { value } = event.target

    emit('update:modelValue', value)
  }
}
</script>

<template>
  <div class="flex">
    <div
      v-for="radio in buttons"
      :key="radio.label"
      class="w-1/2"
    >
      <input
        :id="radio.label"
        class="hidden"
        :checked="modelValue === radio.value"
        type="radio"
        :value="radio.value"
        @change="onChange"
      >
      <label
        :class="useClasses([
          'bg-gradient-to-r to-white from-zinc-100 pl-4 py-3',
          'rounded-md text-2xl font-normal block',
          radio.value === $props.modelValue && ['from-blue-500'],
        ])"
        :for="radio.label"
      >
        {{ radio.label }}
      </label>
    </div>
  </div>
</template>
