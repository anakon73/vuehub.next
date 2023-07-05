<script lang="ts" setup>
import { type Branch } from '@/shared/types'

import { VSelect } from '.'

const branches = [
  {
    name: 'dev',
    commit: {
      sha: '74a892b48172563cb3a7cdc10ae346e31706641b',
      url: 'https://api.github.com/repos/anakon73/vuehub.next/commits/74a892b48172563cb3a7cdc10ae346e31706641b',
    },
    protected: false,
  },
  {
    name: 'master',
    commit: {
      sha: '74a892b48172563cb3a7cdc10ae34fd31706641b',
      url: 'https://api.github.com/repos/anakon73/vuehub.next/commits/74a892b48172563cb3a7cdc10ae34fd31706641b',
    },
    protected: false,
  },
]

const selectedBranch = ref<Branch>(branches[0])
</script>

<template>
  <Story title="Shared/UI/VSelect">
    <VSelect v-model="selectedBranch" :options="branches" />
  </Story>
</template>
