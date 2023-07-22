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

export type Props = {
  user: string
}

const props = defineProps<Props>()

const { user } = toRefs(props)

const selectedRepositories = ref('own')

const { data: login, isFetching: isFetchingUser } = useUser(user)

const username = computed(() => login.value?.login)

const {
  data: repositories, isFetching,
} = useRepositories(username, selectedRepositories)

const showMore = ref<boolean>(false)

const currentRepositories = computed(() => {
  return showMore.value
    ? repositories.value
    : repositories.value?.slice(0, 4)
})
</script>

<template v-if="isLoading">
  <VLayout>
    <div v-if="isFetchingUser" class="mt-20">
      Loading...
    </div>
    <div v-else-if="login === undefined " class="mt-20">
      Loading...
    </div>
    <div v-else class="mt-32 flex justify-evenly gap-4 px-[13.75rem]">
      <div class="font-roboto">
        <img
          :src="login.avatarUrl"
          alt="avatar"
          class="h-96 max-w-xs rounded-[10px] bg-blue-500 object-cover"
        >
        <div class="mb-4 mt-5 text-4xl font-medium">
          {{ login.login }}
        </div>
        <div
          class="
            mb-5 rounded-md bg-slate-100 px-3 py-2
            font-normal leading-7 text-slate-700
            "
        >
          <p v-if="login.company" class="flex items-center gap-3">
            <BuildingOffice2Icon class="h-4 w-4" />
            {{ login.company }}
          </p>
          <p v-if="login.location" class="flex items-center gap-3">
            <MapPinIcon class="h-4 w-4" />
            {{ login.location }}
          </p>
          <p v-if="login.blog" class="flex items-center gap-3">
            <LinkIcon class="h-4 w-4" />
            {{ login.blog }}
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
