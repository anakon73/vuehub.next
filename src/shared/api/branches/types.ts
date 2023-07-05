import { z } from 'zod'

export const BranchAPI = z.object({
  name: z.string(),
  commit: z.object({
    sha: z.string(),
    url: z.string(),
  }),
  protected: z.boolean(),
})

export type BranchAPI = z.infer<typeof BranchAPI>
