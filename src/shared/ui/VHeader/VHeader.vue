<script setup lang="ts">
import { SearchForm } from '@/widgets/SearchForm'

import { VButton } from '@/shared/ui/VButton'

export type Props = {
  username?: string
}

defineProps<Props>()
</script>

<template>
  <header class="fixed top-0 z-20 flex w-full justify-center bg-neutral-800">
    <div class="flex w-full max-w-[1150px] justify-between py-4">
      <div class="flex items-center gap-5">
        <div class="h-12 w-12 rounded-full bg-white" />
        <SearchForm />
      </div>
      <VButton style-variant="primary" class="px-5 py-3.5">
        {{ username }}
      </VButton>
    </div>
  </header>
</template>
