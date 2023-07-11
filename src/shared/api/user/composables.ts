import { useQuery } from '@tanstack/vue-query'

import { userFetcher, userKeys } from '.'

export function useUser(login: Ref<string>) {
  return useQuery(userKeys.GetUser(login),
    () => userFetcher(unref(login)), {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
    })
}
