<script setup lang="ts">
import {
  BuildingOffice2Icon,
  LinkIcon,
  MapPinIcon,
} from '@heroicons/vue/24/outline'

import { VRepositoryCard } from '@/entities/repository'

import { VLayout } from '@/shared/ui/VLayout'
import { VButton } from '@/shared/ui/VButton'
import { useUser } from '@/shared/api/user'
import { useRepositories } from '@/shared/api/repository'
import { useClasses } from '@/shared/lib/composables'

import { RadioButtons } from './ui/RadioButtons'

const selectedRepositories = ref('own')

const { data: user, isFetching: isFetchingUser } = useUser('extrem7')
const {
  data: repositories, isFetching,
} = useRepositories('extrem7', selectedRepositories)

const showMore = ref<boolean>(false)

const currentRepositories = computed(() => {
  return showMore.value
    ? repositories.value
    : repositories.value?.slice(0, 4)
})
</script>

<template v-if="isLoading">
  <VLayout with-search>
    <div v-if="isFetchingUser" class="mt-20">
      Loading...
    </div>
    <div v-else-if="user === undefined " class="mt-20">
      Loading...
    </div>
    <div v-else class="mt-32 flex justify-evenly gap-4 px-[13.75rem]">
      <div class="font-roboto">
        <img
          :src="user.avatarUrl"
          alt="avatar"
          class="h-96 max-w-xs rounded-[10px] bg-blue-500 object-cover"
        >
        <div class="mb-4 mt-5 text-4xl font-medium">
          {{ user.login }}
        </div>
        <div
          class="
            mb-5 rounded-md bg-slate-100 px-3 py-2
            font-normal leading-7 text-slate-700
            "
        >
          <p v-if="user.company" class="flex items-center gap-3">
            <BuildingOffice2Icon class="h-4 w-4" />
            {{ user.company }}
          </p>
          <p v-if="user.location" class="flex items-center gap-3">
            <MapPinIcon class="h-4 w-4" />
            {{ user.location }}
          </p>
          <p v-if="user.blog" class="flex items-center gap-3">
            <LinkIcon class="h-4 w-4" />
            {{ user.blog }}
          </p>
        </div>
        <VButton
          style-variant="dark"
          class="px-7 py-3 text-2xl font-normal"
        >
          Edit profile
        </VButton>
      </div>
      <div class="flex w-full max-w-[40rem] flex-col gap-5">
        <RadioButtons v-model="selectedRepositories" />
        <VRepositoryCard
          v-for="repository in currentRepositories"
          :key="repository.id"
          :is-fetching="isFetching"
          :repository="repository"
        />
        <VButton
          style-variant="primary"
          :class="useClasses([
            'px-7 py-3 self-center',
            showMore && 'mb-8',
          ])"
          @click="showMore = !showMore"
        >
          {{ showMore ? 'Show less' : 'Show more' }}
        </VButton>
      </div>
    </div>
  </VLayout>
</template>
