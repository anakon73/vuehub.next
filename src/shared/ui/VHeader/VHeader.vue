<script setup lang="ts">
import { VButton } from '@/shared/ui/VButton'
import { VSearchInput } from '@/shared/ui/VSearch'

export type Props = {
  homePage?: boolean
  username?: string
}

const props = defineProps<Props>()
</script>

<template>
  <header class="sticky bg-neutral-800">
    <div v-if="props.homePage" class="flex justify-between px-[13.75rem] py-4">
      <div class="flex items-center gap-5">
        <div class="h-12 w-12 rounded-full bg-white" />
        <div class="font-roboto text-2xl font-normal text-zinc-100">
          GITHUB-CLIENT
        </div>
      </div>
      <div class="flex items-center gap-5">
        <VButton style-variant="regular" class="px-9 py-3.5">
          Sign in
        </VButton>
        <VButton style-variant="primary" class="px-9 py-3.5">
          Sign up
        </VButton>
      </div>
    </div>
    <div v-else class="flex justify-between px-[13.75rem] py-4">
      <div class="flex items-center gap-5">
        <div class="h-12 w-12 rounded-full bg-white" />
        <VSearchInput />
      </div>
      <VButton style-variant="primary" class="px-5 py-3.5">
        {{ props.username }}
      </VButton>
    </div>
  </header>
</template>
