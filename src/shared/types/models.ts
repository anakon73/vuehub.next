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
  gitUrl: string
  pushedAt: string
  language: string
  branchesUrl: string
  sshUrl: string
  collaboratorsUrl: string
  contentsUrl: string
  description: string | null
  updatedAt: string
  defaultBranch: string
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

export type Commit = {
  sha: string
  commit: {
    author: {
      name: string
      email: string
      date: string
    }
    message: string
    url: string
    commentCount: number
    commentsUrl?: string
  }
}

export type Content = {
  name: string
  path: string
  sha: string
  size: number
  type: 'dir' | 'file'
  url: string
  downloadUrl: string | null
}

export type Branch = {
  name: string
  commit: {
    sha: string
    url: string
  }
  protected: boolean
}

export type SearchUserItem = {
  type: string
  login: string
  id: number
  avatarUrl: string
  url: string
  reposUrl: string
}

export type SearchRepositoryItem = {
  id: number
  name: string
  fullName: string
  private: boolean
  owner: {
    login: string
    id: number
    avatarUrl: string
    url: string
    type: string
  }
  stargazersCount: number
  defaultBranch: string
}

export type SearchUsers = {
  totalCount: number
  incompleteResults: boolean
  items: SearchUserItem[]
}

export type SearchRepositories = {
  totalCount: number
  incompleteResults: boolean
  items: SearchRepositoryItem[]
}
