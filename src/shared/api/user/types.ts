import { z } from 'zod'

export const userAPI = z.object({
  login: z.string(),
  id: z.number(),
  avatar_url: z.string(),
  url: z.string(),
  html_url: z.string(),
  followers_url: z.string(),
  following_url: z.string(),
  gists_url: z.string(),
  starred_url: z.string(),
  subscriptions_url: z.string(),
  organizations_url: z.string(),
  repos_url: z.string(),
  events_url: z.string(),
  received_events_url: z.string(),
  type: z.string(),
  blog: z.string().nullable(),
  site_admin: z.boolean(),
  company: z.string().nullable(),
  location: z.string().nullable(),
  email: z.string().nullable(),
  public_repos: z.number(),
  followers: z.number(),
  following: z.number(),
})

export type userAPI = z.infer<typeof userAPI>
