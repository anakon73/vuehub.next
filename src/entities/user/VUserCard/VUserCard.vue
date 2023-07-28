<script setup lang="ts">
import type { SearchUserItem } from '@/shared/types'
import { VButton } from '@/shared/ui/VButton'

type Props = {
  user: SearchUserItem
}

const props = defineProps<Props>()

const { user } = toRefs(props)

const follow = ref(false)
</script>

<template>
  <RouterLink
    :to="{
      path: '/',
      name: 'ProfilePage',
      params: { user: user.login },
    }"
  >
    <div
      :="$attrs"
      class="
      flex items-start justify-between
      rounded-xl bg-zinc-100 p-4 font-robotomono text-neutral-800
      "
    >
      <div class="flex gap-4">
        <div>
          <img
            class="h-24 w-24 rounded-full"
            :src="user.avatarUrl"
            alt="user avatar"
          >
        </div>
        <div>
          <div
            class="text-2xl font-medium"
          >
            {{ user.login }}
          </div>
        </div>
      </div>
      <VButton
        :style-variant="follow ? 'primary' : 'regular'"
        class="border border-black/40 px-8 py-2 text-lg font-normal"
        @click.prevent="follow = !follow"
      >
        {{ follow ? 'following' : 'follow' }}
      </VButton>
    </div>
  </RouterLink>
</template>
