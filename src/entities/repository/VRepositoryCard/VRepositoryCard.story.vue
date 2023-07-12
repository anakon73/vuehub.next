<script setup lang="ts">
import { useRepository } from '@/shared/api/repository'

import { VRepositoryCard } from '.'

const user = ref('anakon73')
const repo = ref('vuehub.next')

const userDebounced = refDebounced(user, 2000)
const repoDebounced = refDebounced(repo, 2000)

const {
  data: repository,
  isFetching,
} = useRepository(userDebounced, repoDebounced)
</script>

<template>
  <Story title="Entities/Repository/VRepositoryCard">
    <Variant title="default">
      <VRepositoryCard
        v-if="repository !== undefined"
        :is-fetching="isFetching"
        :repository="repository"
      />
      <template #controls>
        <HstText v-model="user" />
        <HstText v-model="repo" />
      </template>
    </Variant>
  </Story>
</template>
