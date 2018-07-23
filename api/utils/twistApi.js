// @flow
import axios from 'axios'
import Raven from 'shared/raven'

const axiosInstance = axios.create({
  baseURL: 'https://api.twistapp.com/api',
  headers: {
    Authorization: `Bearer ${process.env.TWIST_TEST_TOKEN || ''}`,
  },
})

export const getWorkspaces = async () => {
  const response = await axiosInstance.get('/v2/workspaces/get')
  const workspaces = 'asdasd'
  console.log('asdsadasd')
}

getWorkspaces().then()
