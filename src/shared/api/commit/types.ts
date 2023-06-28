import { z } from 'zod'

export const commitAPI = z.object({
  sha: z.string(),
  commit: z.object({
    author: z.object({
      name: z.string(),
      email: z.string(),
      date: z.string(),
    }),
    message: z.string(),
    url: z.string(),
    comment_count: z.number(),
    comments_url: z.string().optional(),
  }),
})

export type commitAPI = z.infer<typeof commitAPI>
