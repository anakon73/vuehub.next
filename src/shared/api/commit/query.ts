import { z } from 'zod'

import { BASE_URL } from '../lib'

import { commitAPI, normalizeCommit } from '.'

export const commitKeys = {
  GetCommits: (repoName: Ref<string>) => ['commits', repoName],
} as const

export const commitEndpoints = {
  getCommits: (login: string, repoName: string) =>
  `/repos/${login}/${repoName}/commits`,

}

export async function commitsFetcher(
  login: string, repoName: string,
) {
  return z.array(commitAPI)
    .parse(await fetch(
       `${BASE_URL}${commitEndpoints.getCommits(login, repoName)}`,
    ).then((r) => r.json())).map((commit) => normalizeCommit(commit),
    )
}
