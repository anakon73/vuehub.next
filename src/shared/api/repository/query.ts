import { z } from 'zod'

import type { MaybeRef } from 'vue'

import { BASE_URL } from '../lib'

import { normalizeRepository, repositoryAPI } from '.'

export const repositoryKeys = {
  GetRepositories: (
    login: MaybeRef<string | undefined>, selected: Ref<string>,
  ) =>
    [
      'repositories',
      login,
      selected,
    ],
  GetRepository: (login: Ref<string>, repoName: Ref<string>) =>
    ['repository', 'user', login, repoName],
} as const

export const repositoryEndpoints = {
  getRepositories: (login: string | undefined, selected: Ref<string>) => {
    if (selected.value === 'starred') {
      return `/users/${login}/starred`
    }
    else {
      return `/users/${login}/repos`
    }
  },
  getRepository: (login: string, repoName: string) =>
  `/repos/${login}/${repoName}`,
}

export async function repositoriesFetcher(
  login: string | undefined, selected: Ref<string>,
) {
  return z.array(repositoryAPI)
    .parse(await fetch(
      `${BASE_URL}${repositoryEndpoints.getRepositories(login, selected)}`,
    ).then((r) => r.json())).map((repo) => normalizeRepository(repo))
}

export async function repositoryFetcher(login: string, repoName: string) {
  return normalizeRepository(
    repositoryAPI.parse(
      await fetch(
        `${BASE_URL}${repositoryEndpoints.getRepository(login, repoName)}`,
      ).then((r) => r.json()),
    ),
  )
}
