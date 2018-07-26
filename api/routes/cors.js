// @flow
import cors from 'cors'

export default cors({
  origin:
    process.env.NODE_ENV === 'production' && !process.env.FORCE_DEV
      ? ['https://there.pm', /there-(\w|-)+\.now\.sh/g, /there\.pm$/]
      : [/localhost/],
  credentials: true,
})
