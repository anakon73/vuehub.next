import { useQuery } from '@tanstack/vue-query'

import { branchFetcher, branchKeys } from '.'

export function useBranches(login: Ref<string>, repoName: Ref<string>) {
  return useQuery(branchKeys.GetBranches(repoName),
    () => branchFetcher(unref(login), unref(repoName)), {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
    },
  )
}
