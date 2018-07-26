// @flow
import cors from 'cors'

const origin =
  process.env.NODE_ENV === 'production' && !process.env.FORCE_DEV
    ? ['https://there.pm', /there-(\w|-)+\.now\.sh/g, /there\.pm$/]
    : [/localhost/]

export default cors({
  // $FlowIssue
  origin,
  credentials: true,
})
