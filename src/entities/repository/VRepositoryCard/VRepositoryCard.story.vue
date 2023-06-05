<script setup lang="ts">
import { useRepository } from '@/shared/api/repository'

import { VRepositoryCard } from '.'

const { data: repository, isFetching } = useRepository('anakon73', 'vuehub.next')
</script>

<template>
  <Story title="Entities/Repository/VRepositoryCard">
    <VRepositoryCard
      v-if="repository !== undefined"
      :is-fetching="isFetching"
      :repository="repository"
    />
  </Story>
</template>
