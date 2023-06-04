import type { User } from '@/shared/types'

import { pick } from '../lib'

import type { userAPI } from '.'

export function normalizeUser(
  user: userAPI,
): User {
  const {
    avatar_url,
    events_url,
    followers_url,
    following_url,
    gists_url,
    html_url,
    organizations_url,
    received_events_url,
    public_repos,
    site_admin,
    repos_url,
    subscriptions_url,
    starred_url,
  } = user

  return {
    ...pick(
      user,
      'blog',
      'company',
      'email',
      'followers',
      'following',
      'id',
      'location',
      'login',
      'type',
      'url',
    ),
    avatarUrl: avatar_url,
    eventsUrl: events_url,
    followersUrl: followers_url,
    followingUrl: following_url,
    gistsUrl: gists_url,
    htmlUrl: html_url,
    organizationsUrl: organizations_url,
    receivedEventsUrl: received_events_url,
    publicRepos: public_repos,
    siteAdmin: site_admin,
    reposUrl: repos_url,
    subscriptionsUrl: subscriptions_url,
    starredUrl: starred_url,
  }
}
