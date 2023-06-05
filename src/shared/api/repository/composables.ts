import { useQuery } from '@tanstack/vue-query'

import { repositoriesFetcher, repositoryFetcher, repositoryKeys } from '.'

export function useRepositories(login: string) {
  return useQuery(repositoryKeys.GetRepositories,
    () => repositoriesFetcher(login), {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
    })
}

export function useRepository(login: string, repoName: string) {
  return useQuery(repositoryKeys.GetRepository,
    () => repositoryFetcher(login, repoName), {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
    })
}
