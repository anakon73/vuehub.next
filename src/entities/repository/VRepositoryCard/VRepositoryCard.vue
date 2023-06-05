<script setup lang="ts">
import { HeartIcon } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'

import { type Repository } from '@/shared/types'

export interface Props {
  repository: Repository
  isFetching?: boolean
}

const props = defineProps<Props>()

const { repository, isFetching } = toRefs(props)

const data = new Date(repository.value.updatedAt).toLocaleDateString()

const liked = ref<boolean>(false)
</script>

<template>
  <div
    v-if="!isFetching || repository !== undefined"
    class="
    rounded-[10px] bg-zinc-100
    px-5 pb-4 pt-5 font-robotomono text-neutral-800
    "
  >
    <div class="mb-4 flex items-end justify-between">
      <div class="truncate text-2xl font-medium">
        {{ repository.name }}
      </div>
      <button v-if="liked">
        <HeartIconSolid
          class="h-7 w-8 text-blue-500"
          @click="liked = false"
        />
      </button>
      <button
        v-else
      >
        <HeartIcon
          class="h-7 w-8 text-blue-500"
          @click="liked = true"
        />
      </button>
    </div>
    <div class="mb-1.5 text-lg font-normal">
      {{ repository.language }}
    </div>
    <div class="text-lg font-normal">
      {{ data }}
    </div>
  </div>
  <div
    v-else
    class="
    rounded-[10px] bg-zinc-100
    px-5 pb-4 pt-5 font-robotomono text-neutral-800
    "
  >
    <div class="mb-4 h-4 max-w-xs rounded-full bg-gray-200" />
    <div
      class="mb-2 h-4 max-w-[4rem] rounded-full bg-gray-200"
    />
    <div
      class="mb-2 h-4 max-w-[10rem] rounded-full bg-gray-200"
    />
  </div>
</template>
