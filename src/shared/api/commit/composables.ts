import { useQuery } from '@tanstack/vue-query'

import { commitKeys, commitsFetcher } from '.'

export function useCommits(login: Ref<string>, repoName: Ref<string>) {
  return useQuery(commitKeys.GetCommits(repoName),
    () => commitsFetcher(unref(login), unref(repoName)), {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
    })
}
