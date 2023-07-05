import { z } from 'zod'

import { BASE_URL } from '../lib'

import { contentAPI, normalizeContent } from '.'

export const contentKeys = {
  GetContent: ['content'],
} as const

export const contentEndpoints = {
  getContent: (login: string, repoName: string) =>
     `/repos/${login}/${repoName}/contents`,
}

export async function contentFetcher(login: string, repoName: string) {
  return z.array(contentAPI)
    .parse(await fetch(
      `${BASE_URL}${contentEndpoints.getContent(login, repoName)}`,
    ).then((r) => r.json())).sort((a, b) => {
      if (a.type === b.type) {
        return a.name.localeCompare(b.name)
      }
      else if (a.type === 'dir') {
        return -1
      }
      else {
        return 1
      }
    })
    .map((repo) => normalizeContent(repo))
}