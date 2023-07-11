<script setup lang="ts">
import { RepositoryPage } from '.'

const user = ref('anakon73')
const repo = ref('carvago-next')

const userDebounced = refDebounced(user, 2000)
const repoDebounced = refDebounced(repo, 2000)
</script>

<template>
  <Story title="Pages/RepositoryPage">
    <Variant title="default">
      <RepositoryPage
        :user="userDebounced"
        :repo="repoDebounced"
      />
      <template #controls>
        <HstText v-model="user" />
        <HstText v-model="repo" />
      </template>
    </Variant>
  </Story>
</template>
