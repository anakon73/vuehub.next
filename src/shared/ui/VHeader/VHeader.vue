<script setup lang="ts">
import { VButton } from '@/shared/ui/VButton'
import { VInput } from '@/shared/ui/VInput'

export type Props = {
  withSearch?: boolean
  username?: string
}

const query = ref('')

defineProps<Props>()
</script>

<template>
  <header class="fixed top-0 z-20 w-full bg-neutral-800">
    <div v-if="!withSearch" class="flex justify-between px-[13.75rem] py-4">
      <div class="flex items-center gap-5">
        <div class="h-12 w-12 rounded-full bg-white" />
        <div
          class="
          whitespace-nowrap font-roboto text-2xl font-normal text-zinc-100
          "
        >
          GITHUB-CLIENT
        </div>
      </div>
      <div class="flex items-center gap-5">
        <VButton style-variant="regular" class="whitespace-nowrap px-9 py-3.5">
          Sign in
        </VButton>
        <VButton style-variant="primary" class="whitespace-nowrap px-9 py-3.5">
          Sign up
        </VButton>
      </div>
    </div>
    <div v-else class="flex justify-between px-[13.75rem] py-4">
      <div class="flex items-center gap-5">
        <div class="h-12 w-12 rounded-full bg-white" />
        <VInput v-model="query" />
      </div>
      <VButton style-variant="primary" class="px-5 py-3.5">
        {{ username }}
      </VButton>
    </div>
  </header>
</template>
