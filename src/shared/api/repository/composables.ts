import { useQuery } from '@tanstack/vue-query'

import type { MaybeRef } from 'vue'

import { repositoriesFetcher, repositoryFetcher, repositoryKeys } from '.'

export function useRepositories(
  login: MaybeRef<string | undefined>, selected: Ref<string>,
) {
  return useQuery(repositoryKeys.GetRepositories(login, selected),
    () => repositoriesFetcher(unref(login), selected), {
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
