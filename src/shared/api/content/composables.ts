import { useQuery } from '@tanstack/vue-query'

import { contentFetcher, contentKeys } from '.'

export function useContent(login: string, repoName: string) {
  return useQuery(contentKeys.GetContent,
    () => contentFetcher(login, repoName), {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
    },
  )
}
