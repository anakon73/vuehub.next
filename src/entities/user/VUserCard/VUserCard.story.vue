<script setup lang="ts">
import { useSearchUsers } from '@/shared/api/search'
import { VUserCard } from '.'

const query = ref('anakon73')
const queryDebounced = refDebounced(query, 1000)

const { data: users } = useSearchUsers(queryDebounced)
</script>

<template>
  <Story title="Entities/User/VUserCard">
    <Variant>
      <VUserCard
        v-for="user in users?.items"
        :key="user.id"
        class="mb-7 shadow-[0px_5px_0px_0px_#2975C1]"
        :user="user"
      />
      <template #controls>
        <HstText v-model="query" />
      </template>
    </Variant>
  </Story>
</template>
