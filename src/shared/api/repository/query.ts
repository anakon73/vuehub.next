import { z } from 'zod'

import { BASE_URL } from '../lib'

import { normalizeRepository, repositoryAPI } from '.'

export const repositoryKeys = {
  GetRepositories: ['repository', 'repositories', 'user'],
  GetRepository: ['repository', 'user'],
} as const

export const repositoryEndpoints = {
  getRepositories: (login: string) => `/users/${login}/repos`,
  getRepository: (login: string, repoName: string) =>
  `/repos/${login}/${repoName}`,
}

export async function repositoriesFetcher(login: string) {
  return z.array(repositoryAPI)
    .parse(await fetch(
      `${BASE_URL}${repositoryEndpoints.getRepositories(login)}`,
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
