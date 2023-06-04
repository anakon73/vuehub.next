import { useQuery } from '@tanstack/vue-query'

import { userFetcher, userKeys } from '.'

export function useUser(username: string) {
  return useQuery(userKeys.GetUser, () => userFetcher(username), {
    keepPreviousData: false,
    refetchOnWindowFocus: false,
  })
}
