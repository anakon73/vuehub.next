import type { Commit } from '@/shared/types'

import { pick } from '../lib'

import type { commitAPI } from '.'

export function normalizeCommit(
  commit: commitAPI,
): Commit {
  const {
    commit: {
      author,
      message,
      url,
      comment_count,
      comments_url,
    },
  } = commit

  return {
    ...pick(
      commit,
      'sha',
    ),
    commit: {
      commentCount: comment_count,
      commentsUrl: comments_url,
      author,
      message,
      url,
    },
  }
}
