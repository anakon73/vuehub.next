import { z } from 'zod'

import { BASE_URL } from '../lib'

import { normalizeRepository, repositoryAPI } from '.'

export const repositoryKeys = {
  GetRepositories: (selected: Ref<string>) =>
    [
      'repositories',
      selected,
    ],
  GetRepository: ['repository', 'user'],
} as const

export const repositoryEndpoints = {
  getRepositories: (login: string, selected: Ref<string>) => {
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
  login: string, selected: Ref<string>,
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
