import type { SearchRepositories, SearchUsers } from '@/shared/types'

import { pick } from '../lib'

import type { searchRepositoryAPI, searchUserAPI } from '.'

export function normalizeSearchUsers(
  user: searchUserAPI,
): SearchUsers {
  const { incomplete_results, total_count, items } = user

  return {
    incompleteResults: incomplete_results,
    totalCount: total_count,
    items: items.map(({ avatar_url, repos_url, ...item }) => ({
      ...pick(
        item,
        'id',
        'login',
        'type',
        'url',
      ),
      avatarUrl: avatar_url,
      reposUrl: repos_url,
    })),
  }
}

export function normalizeSearchRepositories(
  repository: searchRepositoryAPI,
): SearchRepositories {
  const { incomplete_results, total_count, items } = repository

  return {
    incompleteResults: incomplete_results,
    totalCount: total_count,
    items: items.map(({
      default_branch,
      full_name,
      stargazers_count,
      owner,
      ...item
    }) => {
      return {
        ...pick(
          item,
          'id',
          'name',
          'private',
        ),
        defaultBranch: default_branch,
        fullName: full_name,
        stargazersCount: stargazers_count,
        owner: {
          avatarUrl: owner.avatar_url,
          id: owner.id,
          login: owner.login,
          type: owner.type,
          url: owner.url,
        },
      }
    }),
  }
}
