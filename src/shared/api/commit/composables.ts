import { useQuery } from '@tanstack/vue-query'

import { commitKeys, commitsFetcher } from '.'

export function useCommits(login: string, repoName: string) {
  return useQuery(commitKeys.GetCommits,
    () => commitsFetcher(login, repoName), {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
    })
}
