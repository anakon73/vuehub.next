import { BASE_URL } from '../lib'

import {
  normalizeSearchRepositories,
  normalizeSearchUsers,
  searchRepositoryAPI,
  searchUserAPI,
} from '.'

export const searchKeys = {
  GetUsers: (query: Ref<string>, page: Ref<number>) => ['users', query, page],
  GetRepositories: (query: Ref<string>, page: Ref<number>) =>
    ['repositories', query, page],
}

export const searchEndpoints = {
  getUsers: (query: string, page: number) => {
    return `/search/users?q=${query}&per_page=10&page=${page}`
  },
  getRepositories: (query: string, page: number) => {
    return `/search/repositories?q=${query}&per_page=10&page=${page}`
  },
}

export async function searchUsersFetcher(query: string, page: number) {
  return normalizeSearchUsers(
    searchUserAPI
      .parse(await fetch(
      `${BASE_URL}${searchEndpoints.getUsers(query, page)}`,
      ).then((r) => r.json())),
  )
}

export async function searchRepositoriesFetcher(query: string, page: number) {
  return normalizeSearchRepositories(
    searchRepositoryAPI
      .parse(await fetch(
      `${BASE_URL}${searchEndpoints.getRepositories(query, page)}`,
      ).then((r) => r.json())),
  )
}
