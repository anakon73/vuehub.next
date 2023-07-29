<script setup lang="ts">
export type Props = {
  totalPages: number
  currentPage: number
}

export type Emits = {
  (e: 'prevPage'): void
  (e: 'nextPage'): void
  (e: 'firstPage'): void
  (e: 'lastPage'): void
}

const props = defineProps<Props>()

const { currentPage, totalPages } = toRefs(props)

const emits = defineEmits<Emits>()
</script>

<template>
  <div class="mb-8 flex justify-center font-poppins font-medium">
    <button
      class="
      rounded-l-lg border bg-zinc-100
      px-2 py-1 disabled:text-zinc-400
      "
      :disabled="currentPage === 1"
      @click="emits('firstPage')"
    >
      First Page
    </button>
    <button
      class="border bg-zinc-100 px-2 py-1 disabled:text-zinc-400"
      :disabled="currentPage === 1"
      @click="emits('prevPage')"
    >
      Prev Page
    </button>
    <button
      class="border bg-zinc-100 px-2 py-1 disabled:text-zinc-400"
      :disabled="currentPage === totalPages"
      @click="emits('nextPage')"
    >
      Next Page
    </button>
    <button
      class="
      rounded-r-lg border bg-zinc-100
      px-2 py-1 disabled:text-zinc-400
      "
      :disabled="currentPage === totalPages"
      @click="emits('lastPage')"
    >
      Last Page
    </button>
  </div>
</template>
