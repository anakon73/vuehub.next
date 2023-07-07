import { z } from 'zod'

import { BASE_URL } from '../lib'

import { contentAPI, normalizeContent } from '.'
import type { Branch } from '@/shared/types'

export const contentKeys = {
  GetContent: (
    login: Ref<string>, repoName: Ref<string>, branch: Ref<Branch | undefined>,
  ) => ['content', login, repoName, branch],
} as const

export const contentEndpoints = {
  getContent: (
    login: string, repoName: string, branch: string | undefined,
  ) =>
     `/repos/${login}/${repoName}/contents?ref=${branch}`,
}

export async function contentFetcher(
  login: string, repoName: string, branch: string | undefined,
) {
  return z.array(contentAPI)
    .parse(await fetch(
      `${BASE_URL}${contentEndpoints.getContent(login, repoName, branch)}`,
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
