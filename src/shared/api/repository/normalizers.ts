import type { Repository } from '@/shared/types'

import { pick } from '../lib'

import type { repositoryAPI } from '.'

export function normalizeRepository(
  repository: repositoryAPI,
): Repository {
  const {
    branches_url,
    collaborators_url,
    contents_url,
    full_name,
    git_url,
    pushed_at,
    ssh_url,
    updated_at,
    owner: {
      avatar_url,
      id,
      login,
      url,
    },
  } = repository

  return {
    ...pick(
      repository,
      'description',
      'description',
      'id',
      'language',
      'name',
    ),
    branchesUrl: branches_url,
    collaboratorsUrl: collaborators_url,
    contentsUrl: contents_url,
    fullName: full_name,
    gitUrl: git_url,
    pushedAt: pushed_at,
    sshUrl: ssh_url,
    updatedAt: updated_at,
    owner: {
      avatarUrl: avatar_url,
      id,
      login,
      url,
    },
  }
}
