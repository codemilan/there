// @flow
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.twistapp.com/api',
  headers: {
    Authorization: `Bearer ${process.env.TWIST_TEST_TOKEN || ''}`,
  },
})

export const getTwistAvatarUrl = (avatarId: string, size: number = 120) =>
  `https://d10oy3rrrp8hu2.cloudfront.net/${avatarId}_s${size}.jpg`

export type TwistUser = {
  id: number,
  email: string,
  first_name: string,
  name: string,
  short_name: string,
  avatar_id: string,
  profession: string,
  contact_info: string,
  timezone: string,
  away_mode: ?TwistAwayMode,
  off_days: number[],
  bot: boolean,
  removed: boolean,
  setup_pending: boolean,
}

type TwistAwayMode = {
  type: string,
  date_from: ?string,
  date_to: string,
}

export type TwistUserType = 'ADMIN' | 'USER' | 'GUEST'

export type TwistWorkspaceUser = TwistUser & {
  user_type: TwistUserType,
  is_removed: 0 | 1,
}

export type TwistWorkspace = {
  id: number,
  name: string,
  creator: number,
}

export const getAllWorkspaces = async () => {
  const response = await axiosInstance.get('/v3/workspaces/get')
  const workspaces: TwistWorkspace[] = response.data
  return workspaces
}

export const getWorkspaceUsers = async (id: number) => {
  const response = await axiosInstance.get(`/v3/workspace_users/get?id=${id}`)
  const workspaceUsers: TwistWorkspaceUser[] = response.data
  return workspaceUsers
}

/**
 * Get a user info in context of workspace
 */
export const getWorkspaceUser = async (id: number, user_id: number) => {
  const response = await axiosInstance.get(
    `/v3/workspace_users/getone?id=${id}&user_id=${user_id}`,
  )
  const workspaceUser: TwistWorkspaceUser = response.data
  return workspaceUser
}
