<script setup lang="ts">
import { BookmarkSquareIcon } from '@heroicons/vue/24/outline'
import type { SearchRepositoryItem, SearchUserItem } from '@/shared/types'

type Props = {
  user?: SearchUserItem
  repository?: SearchRepositoryItem
}

const props = defineProps<Props>()

const { user, repository } = toRefs(props)
</script>

<template>
  <div
    class="
    flex items-center gap-2 bg-neutral-800
    py-1 font-medium text-zinc-100
    "
  >
    <BookmarkSquareIcon class="h-4 w-4" />
    <div
      v-if="user"
    >
      {{ user.login }}
    </div>
    <div
      v-if="repository"
    >
      {{ repository.fullName }}
    </div>
  </div>
</template>
