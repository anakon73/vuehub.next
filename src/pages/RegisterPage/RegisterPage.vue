<script setup lang="ts">
import { RegisterForm } from '@/widgets/RegisterForm'

import { VLayout } from '@/shared/ui/VLayout'

import google from './assets/googleIcon.svg'
import facebook from './assets/facebookIcon.svg'
</script>

<template>
  <VLayout>
    <div
      class="mx-auto max-w-[30.625rem] pt-40 font-roboto"
    >
      <RegisterForm />
      <div class="pt-14 text-center text-2xl">
        or sign in with
      </div>
      <div class="flex justify-center gap-5 pt-3">
        <img :src="google">
        <img :src="facebook">
      </div>
    </div>
  </VLayout>
</template>
