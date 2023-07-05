import { useQuery } from '@tanstack/vue-query'

import { branchFetcher, branchKeys } from '.'

export function useBranches(login: string, repoName: string) {
  return useQuery(branchKeys.GetBranches,
    () => branchFetcher(login, repoName), {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
    },
  )
}
