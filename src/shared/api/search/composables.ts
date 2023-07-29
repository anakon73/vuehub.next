import { useQuery } from '@tanstack/vue-query'

import { searchKeys, searchRepositoriesFetcher, searchUsersFetcher } from '.'

export function useSearchUsers(
  query: Ref<string>,
  page: Ref<number> = ref(1),
) {
  return useQuery(searchKeys.GetUsers(query, page),
    () => searchUsersFetcher(unref(query), unref(page)), {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      enabled: computed(() => !!query.value.length),
    })
}

export function useSearchRepositories(
  query: Ref<string>,
  page: Ref<number> = ref(1),
) {
  return useQuery(searchKeys.GetRepositories(query, page),
    () => searchRepositoriesFetcher(unref(query), unref(page)), {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      enabled: computed(() => !!query.value.length),
    },
  )
}
