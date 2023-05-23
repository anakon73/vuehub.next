import type { App } from 'vue'

import { router } from './router'

export function applyProviders(app: App) {
  app.use(router)
}
