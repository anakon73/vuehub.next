<script setup lang="ts">
import { FolderIcon } from '@heroicons/vue/24/solid'
import { DocumentIcon } from '@heroicons/vue/24/outline'

import { useClasses } from '@/shared/lib/composables'
import { useCommits } from '@/shared/api/commit'
import { useContent } from '@/shared/api/content'
import { useBranches } from '@/shared/api/branches'
import { useRepository } from '@/shared/api/repository'
import type { Branch } from '@/shared/types'
import { VButton } from '@/shared/ui/VButton'
import { VLayout } from '@/shared/ui/VLayout'
import { VSelect } from '@/shared/ui/VSelect'

export type Props = {
  user: string
  repo: string
}

const props = defineProps<Props>()

const { repo, user } = toRefs(props)

const {
  data: repository,
} = useRepository(user, repo)
const {
  data: commits,
} = useCommits(user, repo)
const {
  data: branches,
} = useBranches(user, repo)

const showCopyClipBoard = ref<boolean>(false)

function copyDownloadLink() {
  showCopyClipBoard.value = true
  navigator.clipboard.writeText(repository.value!.sshUrl)
  setTimeout(
    () => { showCopyClipBoard.value = false },
    1000)
}

const selectedBranch = ref<Branch>()

watch(branches, () => {
  if (branches !== undefined) {
    selectedBranch.value = branches.value![0]
  }
})

const {
  data: content, isLoading: isLoadingContent,
} = useContent(user, repo, selectedBranch)
</script>

<template>
  <VLayout with-search>
    <div v-if="repository === undefined">
      Repo is not found
    </div>
    <div v-else class="mt-32 px-[13.75rem] font-robotomono">
      <div
        :class="useClasses([
          'fixed bottom-10 left-1/2 translate-x-[-90px]',
          'rounded-lg bg-zinc-200 px-6 py-2 text-lg',
          'transition-opacity duration-300',
          showCopyClipBoard ? 'opacity-100' : 'opacity-0',
        ])"
      >
        SSH Copied!
      </div>
      <div class="flex justify-center gap-5 font-robotomono">
        <div class="w-full max-w-[46.5625rem]">
          <div class="mb-5 font-roboto text-2xl">
            {{ repository.fullName }}
          </div>
          <div class="mb-5 flex w-full justify-between">
            <VSelect
              v-if="branches !== undefined"
              v-model="selectedBranch"
              :options="branches"
            />
            <VButton
              style-variant="dark"
              class="px-6 py-2"
              @click="copyDownloadLink"
            >
              Download
            </VButton>
          </div>
          <div class="mb-4 text-lg">
            <div class="flex w-full items-center gap-5 bg-blue-500 py-4 pl-4">
              <div class="h-12 w-12 rounded-full bg-zinc-100" />
              <div class="overflow-hidden pr-4 text-lg font-medium">
                <div v-if="commits === undefined">
                  No commits
                </div>
                <div v-else class="truncate">
                  {{ commits[0].commit.message }}
                </div>
              </div>
            </div>
            <div v-if="isLoadingContent">
              Loading
            </div>
            <div
              v-for="item in content"
              v-else
              :key="item.url"
              class="mb-px flex items-center gap-5 bg-zinc-100 p-5"
            >
              <FolderIcon v-if="item.type === 'dir'" class="w-12" />
              <DocumentIcon v-else class="w-12" />
              {{ item.name }}
            </div>
          </div>
        </div>
        <div>
          <div
            class="
            mt-16 w-[14.6875rem] rounded-xl bg-zinc-100 pb-5 pl-6 pt-3.5 text-lg
            "
          >
            <div class="mb-2 text-2xl font-medium">
              {{ repository.name }}
            </div>
            <div class="mb-[4.5rem]">
              {{ repository.description }}
            </div>
            <div class="mb-2">
              {{ repository.language }}
            </div>
            <div>{{ new Date(repository.updatedAt).toLocaleDateString() }}</div>
          </div>
        </div>
      </div>
    </div>
  </VLayout>
</template>
