import type { Plugin } from 'vue'
import { ZodError } from 'zod'

import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'

export function makeInferFn<E extends Record<string, any>>() {
  return <T extends E>(v: T) => v
}

export const definePlugin = makeInferFn<NonNullable<Plugin>>()

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5000,
      retry(failureCount, error) {
        return !(error instanceof ZodError) && failureCount < 3
      },
    },
  },
})

export const vueQuery = definePlugin({
  install(app) {
    VueQueryPlugin.install(app, { queryClient })
  },
})
