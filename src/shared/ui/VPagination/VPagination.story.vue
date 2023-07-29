<script setup lang="ts">
import { VPagination } from '.'

const page = ref(1)
const totalPages = 4
</script>

<template>
  <Story title="Shared/UI/VPagination">
    <Variant title="default">
      <VPagination
        :total-pages="totalPages"
        :current-page="page"
        @prev-page="page -= 1"
        @first-page="page = 1"
        @next-page="page += 1"
        @last-page="page = totalPages"
      />
    </Variant>
  </Story>
</template>
