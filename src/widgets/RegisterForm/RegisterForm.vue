<script setup lang="ts">
import { VButton } from '@/shared/ui/VButton'
import { VInput } from '@/shared/ui/VInput'

const username = ref('')
const password = ref('')
</script>

<template>
  <div class="font-roboto drop-shadow-[0_14px_18px_rgba(34,34,34,0.30)]">
    <div class="bg-blue-500 pb-6 pt-7 text-center text-white">
      <h2 class="text-4xl">
        SIGN IN
      </h2>
      <p class="text-2xl font-light">
        to github-client
      </p>
    </div>
    <div class="flex flex-col items-center rounded-b-xl bg-zinc-100">
      <p class="pb-2 pt-8 text-2xl">
        Username or email address
      </p>
      <div class="w-full px-10">
        <VInput
          v-model:model-value="username"
          style-variant="black"
          class="w-full text-xl"
        />
      </div>
      <p class="pb-2 pt-7 text-2xl">
        Password
      </p>
      <div class="w-full px-10">
        <VInput
          v-model:model-value="password"
          style-variant="black"
          type="password"
          class="w-full text-xl"
        />
      </div>
      <p class="pb-5 pt-2 text-lg font-light">
        Forgot password?
      </p>
      <div class="pb-9">
        <VButton
          style-variant="dark"
          class="px-24 py-3.5 text-2xl font-medium"
        >
          Sign in
        </VButton>
      </div>
    </div>
  </div>
</template>
