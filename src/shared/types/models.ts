export type Repository = {
  id: number
  name: string
  fullName: string
  owner: {
    login: string
    id: number
    avatarUrl: string
    url: string
  }
  pushedAt: string
  language: string
}

export type User = {
  login: string
  blog: string | null
  id: number
  avatarUrl: string
  url: string
  htmlUrl: string
  followersUrl: string
  followingUrl: string
  gistsUrl: string
  starredUrl: string
  subscriptionsUrl: string
  organizationsUrl: string
  reposUrl: string
  eventsUrl: string
  receivedEventsUrl: string
  type: string
  siteAdmin: boolean
  company: string | null
  location: string | null
  email: string | null
  publicRepos: number
  followers: number
  following: number
}