import type { App } from 'vue'

import { router } from './router'
import { vueQuery } from './vue-query'

export function applyProviders(app: App) {
  app.use(vueQuery)
  app.use(router)
}
