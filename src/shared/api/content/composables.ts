import { useQuery } from '@tanstack/vue-query'

import { contentFetcher, contentKeys } from '.'
import type { Branch } from '@/shared/types'

export function useContent(
  login: Ref<string>, repoName: Ref<string>, branch: Ref<Branch | undefined>,
) {
  return useQuery(contentKeys.GetContent(login, repoName, branch),
    () => contentFetcher(unref(login), unref(repoName), branch.value!.name), {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
    },
  )
}
