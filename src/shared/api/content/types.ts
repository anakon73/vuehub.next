import { z } from 'zod'

export const contentAPI = z.object({
  name: z.string(),
  path: z.string(),
  sha: z.string(),
  size: z.number(),
  url: z.string(),
  type: z.enum(['dir', 'file']),
  download_url: z.string().nullable(),
})

export type contentAPI = z.infer<typeof contentAPI>
