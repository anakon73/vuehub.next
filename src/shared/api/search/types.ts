import { z } from 'zod'

export const searchUserAPI = z.object({
  total_count: z.number(),
  incomplete_results: z.boolean(),
  items: z.array(
    z.object({
      login: z.string(),
      id: z.number(),
      avatar_url: z.string(),
      url: z.string(),
      repos_url: z.string(),
      type: z.string(),
    }),
  ),
})

export const searchRepositoryAPI = z.object({
  total_count: z.number(),
  incomplete_results: z.boolean(),
  items: z.array(z.object({
    id: z.number(),
    name: z.string(),
    full_name: z.string(),
    private: z.boolean(),
    owner: z.object({
      login: z.string(),
      id: z.number(),
      avatar_url: z.string(),
      url: z.string(),
      type: z.string(),
    }),
    stargazers_count: z.number(),
    default_branch: z.string(),
  })),
})

export type searchUserAPI = z.infer<typeof searchUserAPI>

export type searchRepositoryAPI = z.infer<typeof searchRepositoryAPI>
