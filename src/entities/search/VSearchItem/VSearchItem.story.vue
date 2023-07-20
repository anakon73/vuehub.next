<script setup lang="ts">
import { useSearchRepositories, useSearchUsers } from '@/shared/api/search'
import { VSearchItem } from '.'

const userQuery = ref('anakon')
const repositoryQuery = ref('vuehub.next')

const userQueryDebounced = refDebounced(userQuery, 1000)
const repositoryQueryDebounced = refDebounced(repositoryQuery, 1000)

const { data: users } = useSearchUsers(userQueryDebounced)
const { data: repositories } = useSearchRepositories(repositoryQueryDebounced)

const usersArray = computed(() => {
  if (users.value)
    return users.value.items.splice(0, 3)
})

const repositoriesArray = computed(() => {
  if (repositories.value)
    return repositories.value.items.splice(0, 3)
})
</script>

<template>
  <Story title="Entities/Search/VSearchItem">
    <Variant title="user">
      <VSearchItem
        v-for="user in usersArray"
        :key="user.id"
        :user="user"
      />
      <template #controls>
        <HstText v-model="userQuery" />
      </template>
    </Variant>
    <Variant title="repository">
      <VSearchItem
        v-for="repository in repositoriesArray"
        :key="repository.id"
        :repository="repository"
      />
      <template #controls>
        <HstText v-model="repositoryQuery" />
      </template>
    </Variant>
  </Story>
</template>
