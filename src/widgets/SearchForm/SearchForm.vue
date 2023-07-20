<script setup lang="ts">
import { VSearchItem } from '@/entities/search'

import { useSearchRepositories, useSearchUsers } from '@/shared/api/search'
import { VInput } from '@/shared/ui/VInput'

const query = ref('')
const queryDebounced = refDebounced(query, 1000)

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
</script>

<template>
  <div>
    <VInput v-model:model-value="query" />
    <div v-if="queryDebounced">
      <div class="mt-3 max-w-xs rounded-xl bg-neutral-800 px-4 py-2 shadow-md">
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
  </div>
</template>
