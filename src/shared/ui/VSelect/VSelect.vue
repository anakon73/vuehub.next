<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'

import { useClasses } from '@/shared/lib/composables'
import { VButton } from '@/shared/ui/VButton'
import type { Branch } from '@/shared/types'

// type Option = {
//   name: string
//   commit: {
//     sha: string
//     url: string
//   }
//   protected: boolean
// }

// export type ExtractComponentProps<T> =
//   T extends new () => { $props: infer P }
//     ? P
//     : never

// type ListboxProps = ExtractComponentProps<typeof Listbox>

export type Props = {
  options: Branch[]
  modelValue?: Branch
}

const { modelValue, options } = defineProps<Props>()
</script>

<template>
  <div class="max-w-[14rem]">
    <Listbox :="$attrs">
      <ListboxButton class="text-left">
        <VButton
          style-variant="regular"
          class="max-w-[14rem] truncate border px-8 py-2 font-normal"
        >
          {{ modelValue?.name }}
        </VButton>
      </ListboxButton>
      <ListboxOptions
        class="absolute max-h-96 max-w-[14rem] overflow-y-scroll pt-2"
      >
        <ListboxOption
          v-for="(option, index) in options"
          :key="option.name"
          :class="useClasses([
            'flex-col border-x px-8 py-2 transition-colors truncate',
            'font-roboto text-xl font-normal leading-6 text-black',
            index === options.length - 1 && 'border-b rounded-b-xl',
            index === 0 && 'border-t rounded-t-xl',
            option.name === modelValue?.name
              ? 'bg-zinc-200'
              : 'bg-zinc-100 hover:bg-zinc-200',
          ])"
          :value="option"
          :disabled="option.name === modelValue?.name"
        >
          {{ option.name }}
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
</template>
