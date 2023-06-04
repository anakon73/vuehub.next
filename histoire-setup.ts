import { defineSetupVue3 } from '@histoire/plugin-vue'

import { vueQuery } from '@/app/providers/vue-query'

import './src/app/styles/index.css'

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(vueQuery)
})
