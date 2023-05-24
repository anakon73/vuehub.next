<script setup lang="ts">
import { logEvent } from 'histoire/client'

import { VButton } from '.'
import { styleVariants } from './types'

type IState = {
  styleVariant: styleVariants
  disabled: boolean
  text: string
}

const state = reactive<IState>({
  styleVariant: 'regular',
  disabled: false,
  text: 'Click',
})

function onClick(event: Event) {
  logEvent('My event', event)
}
</script>

<template>
  <Story
    title="Shared/UI/VButton"
    :layout="{ type: 'grid' }"
  >
    <Variant title="default">
      <VButton
        class="px-8 py-3 leading-6"
        :disabled="state.disabled"
        :style-variant="state.styleVariant"
        @click="$event => onClick($event)"
      >
        {{ state.text }}
      </VButton>
    </Variant>

    <Variant title="withBorder">
      <VButton
        class="border border-blue-400 px-8 py-3 leading-6"
        :disabled="state.disabled"
        :style-variant="state.styleVariant"
        @click="$event => onClick($event)"
      >
        {{ state.text }}
      </VButton>
    </Variant>

    <template #controls>
      <HstCheckbox v-model="state.disabled" title="Disabled" />
      <HstText v-model="state.text" title="Text" />
      <HstSelect
        v-model="state.styleVariant"
        title="Style"
        :options="styleVariants"
      />
    </template>
  </Story>
</template>
