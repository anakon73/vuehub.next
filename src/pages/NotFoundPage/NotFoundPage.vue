<script setup lang="ts">
import { useRouter } from 'vue-router'

import { VButton } from '@/shared/ui/VButton'

import backgroundImage from './assets/background.jpg'

const router = useRouter()
</script>

<template>
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
          Yo, access Forbidden <br>
          You shouldn’t be <br> here
        </h1>
        <p class="my-7 text-2xl">
          do smth hehe
        </p>
        <VButton
          class="px-12 py-5 text-2xl uppercase"
          style-variant="primary"
          @click="router.push('/')"
        >
          return
        </VButton>
      </div>
      <div class="relative -left-8">
        <img src="./assets/octocatIcon.png" alt="octocat">
      </div>
    </div>
  </div>
</template>
