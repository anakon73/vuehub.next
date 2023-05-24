<script setup lang='ts'>
export type Props = {
  modelValue?: string
}

const props = defineProps<Props>()

const emits = defineEmits<{
  (e: 'update:modelValue'): void
}>()

const vModel = useVModel(props, 'modelValue', emits)
</script>

<template>
  <input
    v-model="vModel"
    class="
    rounded-xl border border-zinc-100 bg-inherit px-4 py-3.5
    text-zinc-100 placeholder:text-zinc-100 focus:outline-none
    "
    placeholder="Search..."
    type="text"
  >
</template>
