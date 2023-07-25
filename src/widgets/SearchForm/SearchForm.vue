<script setup lang="ts">
import { VSearchItem } from '@/entities/search'

import { useSearchRepositories, useSearchUsers } from '@/shared/api/search'
import { VInput } from '@/shared/ui/VInput'

const query = ref('')
const queryDebounced = refDebounced(query, 1000)

const form = ref()

const isShow = ref(false)

const { data: users } = useSearchUsers(queryDebounced)
const { data: repositories } = useSearchRepositories(queryDebounced)

const repositoriesArray = computed(() => {
  if (repositories.value !== undefined)
    return repositories.value.items.slice(0, 3)
})
const usersArray = computed(() => {
  if (users.value !== undefined)
    return users.value.items.splice(0, 3)
})

onClickOutside(form, () => isShow.value = false)

onKeyStroke('Escape',
  () => {
    (document.activeElement as HTMLElement).blur()
    isShow.value = false
  },
)
</script>

<template>
  <div ref="form" class="relative">
    <VInput
      v-model:model-value="query"
      style-variant="white"
      placeholder="Search..."
      @click="isShow = true"
    />
    <div
      v-if="queryDebounced && isShow"
      class="
      absolute top-14 w-[13.4375rem] rounded-b-xl bg-neutral-800
      px-4 py-2 shadow-md
      "
    >
      <div
        v-if="usersArray!.length >= 1"
        class="items-center gap-2 text-zinc-600"
      >
        <span class="font-medium">Users</span>
        <VSearchItem
          v-for="user in usersArray"
          :key="user.id"
          :user="user"
        />
      </div>
      <div
        v-if="repositoriesArray!.length >= 1"
        class="items-center gap-2 text-zinc-600"
      >
        <span class="font-medium">Repositories</span>
        <VSearchItem
          v-for="repository in repositoriesArray"
          :key="repository.id"
          :repository="repository"
        />
      </div>
    </div>
  </div>
</template>
