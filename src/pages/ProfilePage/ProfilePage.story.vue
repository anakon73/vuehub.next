<script setup lang="ts">
import { ProfilePage } from '.'

const user = ref('extrem7')
const userDebounced = refDebounced(user, 2000)
</script>

<template>
  <Story title="Pages/ProfilePage">
    <Variant title="default">
      <ProfilePage :user="userDebounced" />
      <template #controls>
        <HstText v-model="user" />
      </template>
    </Variant>
  </Story>
</template>
