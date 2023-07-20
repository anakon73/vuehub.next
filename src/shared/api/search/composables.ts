import { useQuery } from '@tanstack/vue-query'

import { searchKeys, searchRepositoriesFetcher, searchUsersFetcher } from '.'

export function useSearchUsers(query: Ref<string>) {
  return useQuery(searchKeys.GetUsers(query),
    () => searchUsersFetcher(unref(query)), {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      enabled: computed(() => !!query.value.length),
    })
}

export function useSearchRepositories(query: Ref<string>) {
  return useQuery(searchKeys.GetRepositories(query),
    () => searchRepositoriesFetcher(unref(query)), {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      enabled: computed(() => !!query.value.length),
    },
  )
}
