<script setup lang="ts">
import { capitalize } from 'vue'

import { useRoute, useRouter } from 'vue-router'

import { VRepositoryCard } from '@/entities/repository'
import { VUserCard } from '@/entities/user'

import { useSearchRepositories, useSearchUsers } from '@/shared/api/search'
import { VButton } from '@/shared/ui/VButton'
import { useClasses } from '@/shared/lib/composables'

const route = useRoute()
const router = useRouter()

const type = computed(() => {
  return route.query.type
})

const query = computed(() => {
  if (!Array.isArray(route.query.query) && route.query.query) {
    return route.query.query
  }
  else {
    return ''
  }
})

const {
  data: repositories,
  isFetching: isFetchingRepositories,
} = useSearchRepositories(query)

const {
  data: users,
  isFetching: isFetchingUsers,
} = useSearchUsers(query)
</script>

<template>
  <div
    class="mx-auto mt-32 flex max-w-[1150px]
    justify-between gap-10 font-poppins
    "
  >
    <div class="w-full">
      <div class="flex justify-between">
        <div class="text-2xl">
          Results by
          <span class="font-semibold">{{ route.query.query }}</span> search:
        </div>
        <VButton style-variant="dark" class="mb-7 px-8 py-2">
          filter
        </VButton>
      </div>
      <div v-if="isFetchingRepositories || isFetchingUsers">
        Loading
      </div>
      <VRepositoryCard
        v-for="repo in repositories?.items"
        v-else-if="type === 'repositories'"
        :key="repo.id"
        class="mb-7 shadow-[0px_5px_0px_0px_#2975C1]"
        :repository="repo"
      />
      <VUserCard
        v-for="user in users?.items"
        v-else-if="type === 'users'"
        :key="user.id"
        class="mb-7 shadow-[0px_5px_0px_0px_#2975C1]"
        :user="user"
      />
    </div>
    <div class="mt-[4.3rem] flex flex-col gap-7">
      <div v-for="btn in ['users', 'repositories']" :key="btn">
        <a
          :class="useClasses([
            'bg-gradient-to-r to-white block rounded-md py-3 pl-5 pr-20',
            btn === type ? 'from-blue-500' : 'from-zinc-100',
          ])"
          @click="router.replace({ query: { query, type: btn } })"
        >
          {{ capitalize(btn) }}
        </a>
      </div>
    </div>
  </div>
</template>
