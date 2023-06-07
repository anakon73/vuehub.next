<script setup lang="ts">
import { RadioButtons } from '.'

const selected = ref('repos')
</script>

<template>
  <Story title="Pages/ProfilePage/UI/RadioButtons">
    <RadioButtons
      v-model="selected"
    />
    <template #controls>
      <div>
        Starred:
        <input
          v-model="selected"
          value="starred"
          type="radio"
        >
      </div>
      <div>
        Repos:
        <input
          v-model="selected"
          value="repos"
          type="radio"
        >
      </div>
    </template>
  </Story>
</template>
