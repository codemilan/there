// @flow
const isDev: boolean = process.env.NODE_ENV === 'development'

const config = {
  heapAppId: isDev ? '1004333929' : '103603704',
}

export default config
