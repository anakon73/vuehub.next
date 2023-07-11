import { BASE_URL } from '../lib'

import { normalizeUser, userAPI } from '.'

export const userKeys = {
  GetUser: (login: Ref<string>) => ['user', login],
} as const

export const userEndpoints = {
  getUser: (login: string) => `/users/${login}`,
}

export async function userFetcher(username: string) {
  return normalizeUser(
    userAPI.parse(
      await fetch(
        `${BASE_URL}${userEndpoints.getUser(username)}`,
      ).then((r) => r.json()),
    ),
  )
}
