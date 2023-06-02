import type { App } from 'vue'

import { VueQueryPlugin } from '@tanstack/vue-query'

import { router } from './router'

export function applyProviders(app: App) {
  app.use(VueQueryPlugin)
  app.use(router)
}
