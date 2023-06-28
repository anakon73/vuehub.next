import type { Content } from '@/shared/types'

import { pick } from '../lib'

import type { contentAPI } from '.'

export function normalizeContent(
  content: contentAPI,
): Content {
  return {
    ...pick(
      content,
      'sha',
      'name',
      'size',
      'type',
      'path',
      'size',
      'url',
    ),
    downloadUrl: content.download_url,
  }
}
