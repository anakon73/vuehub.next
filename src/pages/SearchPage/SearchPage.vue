<script setup lang="ts">
import { capitalize } from 'vue'

import { useRoute, useRouter } from 'vue-router'

import { VRepositoryCard } from '@/entities/repository'
import { VUserCard } from '@/entities/user'

import { useSearchRepositories, useSearchUsers } from '@/shared/api/search'
import { VButton } from '@/shared/ui/VButton'
import { useClasses } from '@/shared/lib/composables'
import { VPagination } from '@/shared/ui/VPagination'

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

const userPage = ref(1)
const repositoriesPage = ref(1)

const {
  data: users,
  isFetching: isFetchingUsers,
} = useSearchUsers(query, userPage)
const {
  data: repositories,
  isFetching: isFetchingRepositories,
} = useSearchRepositories(query, repositoriesPage)

const usersPages = computed(() => {
  if (users.value !== undefined) {
    return Math.round(users.value.totalCount / 10)
  }
})
const repositoriesPages = computed(() => {
  if (repositories.value !== undefined) {
    return Math.round(repositories.value.totalCount / 10)
  }
})
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
      <div v-else-if="type === 'repositories'">
        <VRepositoryCard
          v-for="repo in repositories?.items"
          :key="repo.id"
          class="mb-7 shadow-[0px_5px_0px_0px_#2975C1]"
          :repository="repo"
        />
        <VPagination
          v-if="repositoriesPages! > 1"
          :total-pages="repositoriesPages!"
          :current-page="repositoriesPage"
          @last-page="repositoriesPage = repositoriesPages!"
          @first-page="repositoriesPage = 1"
          @prev-page="repositoriesPage -= 1"
          @next-page="repositoriesPage += 1"
        />
      </div>
      <div v-else-if="type === 'users'">
        <VUserCard
          v-for="user in users?.items"
          :key="user.id"
          class="mb-7 shadow-[0px_5px_0px_0px_#2975C1]"
          :user="user"
        />
        <VPagination
          v-if="usersPages! > 1"
          :total-pages="usersPages!"
          :current-page="userPage"
          @last-page="userPage = usersPages!"
          @first-page="userPage = 1"
          @prev-page="userPage -= 1"
          @next-page="userPage += 1"
        />
      </div>
    </div>
    <div class="mt-[4.3rem] flex flex-col gap-7">
      <div v-for="btn in ['users', 'repositories']" :key="btn">
        <a
          :class="useClasses([
            'bg-gradient-to-r to-white block rounded-md py-3 pl-5 pr-20',
            'cursor-pointer select-none',
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
