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
  <div>
    <RouterLink v-if="user" :to="{ path: `/${user.login}` }">
      <div
        class="
        flex items-center gap-2 whitespace-nowrap
        bg-neutral-800 py-1 font-medium text-zinc-100
        "
      >
        <BookmarkSquareIcon class="h-4 w-4" />
        <div
          class="max-w-[11.25rem] truncate"
        >
          {{ user.login }}
        </div>
      </div>
    </RouterLink>
    <RouterLink v-if="repository" :to="{ path: `/${repository.fullName}` }">
      <div
        class="
        flex items-center gap-2 whitespace-nowrap
        bg-neutral-800 py-1 font-medium text-zinc-100
        "
      >
        <BookmarkSquareIcon class="h-4 w-4" />
        <div
          class="max-w-[11.25rem] truncate"
        >
          {{ repository.fullName }}
        </div>
      </div>
    </RouterLink>
  </div>
</template>
