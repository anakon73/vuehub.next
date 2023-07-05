import { z } from 'zod'

import { BASE_URL } from '../lib'

import { BranchAPI } from '.'

export const branchKeys = {
  GetBranches: ['branches'],
} as const

export const branchEndpoints = {
  getBranches: (login: string, repoName: string) =>
    `/repos/${login}/${repoName}/branches`,
}

export async function branchFetcher(login: string, repoName: string) {
  return z.array(BranchAPI)
    .parse(await fetch(
    `${BASE_URL}${branchEndpoints.getBranches(login, repoName)}`,
    ).then((r) => r.json()),
    )
}
