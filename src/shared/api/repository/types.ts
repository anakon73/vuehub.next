import { z } from 'zod'

export const repositoryAPI = z.object({
  id: z.number(),
  name: z.string(),
  full_name: z.string(),
  owner: z.object({
    login: z.string(),
    id: z.number(),
    avatar_url: z.string(),
    url: z.string(),
  }),
  pushed_at: z.string(),
  language: z.string(),
  branches_url: z.string(),
  git_url: z.string(),
  ssh_url: z.string(),
  collaborators_url: z.string(),
  contents_url: z.string(),
  description: z.string().nullable(),
  updated_at: z.string(),
  default_branch: z.string(),
})

export type repositoryAPI = z.infer<typeof repositoryAPI>
