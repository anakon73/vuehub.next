import { useQuery } from '@tanstack/vue-query'

import { contentFetcher, contentKeys } from '.'
import type { Branch } from '@/shared/types'

export function useContent(
  login: string, repoName: string, branch: Ref<Branch | undefined>,
) {
  return useQuery(contentKeys.GetContent(branch),
    () => contentFetcher(login, repoName, branch.value!.name), {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
    },
  )
}
