<script setup lang='ts'>
export type Props = {
  modelValue?: string
}

const props = defineProps<Props>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function updateModelValue(event: Event) {
  if (event.target instanceof HTMLInputElement) {
    const { value } = event.target

    emits('update:modelValue', value)
  }
}
</script>

<template>
  <input
    class="
    rounded-xl border border-zinc-100 bg-inherit px-4 py-2.5
    text-zinc-100 placeholder:text-zinc-100 focus:outline-none
    "
    :value="props.modelValue"
    placeholder="Search..."
    type="text"
    @input="updateModelValue"
  >
</template>
