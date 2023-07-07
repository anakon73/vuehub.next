import { useQuery } from '@tanstack/vue-query'

import { repositoriesFetcher, repositoryFetcher, repositoryKeys } from '.'

export function useRepositories(login: string, selected: Ref<string>) {
  return useQuery(repositoryKeys.GetRepositories(selected),
    () => repositoriesFetcher(login, selected), {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
    })
}

export function useRepository(login: Ref<string>, repoName: Ref<string>) {
  return useQuery(repositoryKeys.GetRepository(login, repoName),
    () => repositoryFetcher(unref(login), unref(repoName)), {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
    })
}
