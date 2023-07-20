import { BASE_URL } from '../lib'

import {
  normalizeSearchRepositories,
  normalizeSearchUsers,
  searchRepositoryAPI,
  searchUserAPI,
} from '.'

export const searchKeys = {
  GetUsers: (query: Ref<string>) => ['users', query],
  GetRepositories: (query: Ref<string>) => ['repositories', query],
}

export const searchEndpoints = {
  getUsers: (query: string) => `/search/users?q=${query}`,
  getRepositories: (query: string) => `/search/repositories?q=${query}`,
}

export async function searchUsersFetcher(query: string) {
  return normalizeSearchUsers(
    searchUserAPI
      .parse(await fetch(
      `${BASE_URL}${searchEndpoints.getUsers(query)}`,
      ).then((r) => r.json())),
  )
}

export async function searchRepositoriesFetcher(query: string) {
  return normalizeSearchRepositories(
    searchRepositoryAPI
      .parse(await fetch(
      `${BASE_URL}${searchEndpoints.getRepositories(query)}`,
      ).then((r) => r.json())),
  )
}
