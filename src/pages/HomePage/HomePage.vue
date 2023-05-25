<script setup lang="ts">
import { VLayout } from '@/shared/ui/VLayout'

import { VButton } from '@/shared/ui/VButton'

import backgroundImage from './assets/background.jpg'
</script>

<template>
  <VLayout>
    <div
      :style="{ 'background-image': `url(${backgroundImage})` }"
      class="
      relative z-10 block min-h-screen bg-cover bg-center
      bg-no-repeat p-0
      "
    >
      <div class="flex justify-center pt-52">
        <div class="pt-10">
          <h1 class="font-robotomono text-6xl font-medium leading-[4.5rem]">
            Built for developers <br>
            (yes, i stole it)
          </h1>
          <p class="my-10 text-2xl">
            some description right here
          </p>
          <VButton
            class="px-12 py-5 text-2xl uppercase"
            style-variant="primary"
          >
            start now
          </VButton>
        </div>
        <div class="relative -left-8">
          <img src="./assets/octocatIcon.png" alt="octocat">
        </div>
      </div>
    </div>
  </VLayout>
</template>
