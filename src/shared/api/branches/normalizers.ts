import type { Branch } from '@/shared/types'
import type { BranchAPI } from '.'
import { pick } from '../lib'

export function normalizeBranches(
  branch: BranchAPI,
): Branch {
  return {
    ...pick(
      branch,
      'name',
      'protected',
    ),
    commit: {
      ...pick(
        branch.commit,
        'sha',
        'url',
      ),
    },
  }
}
