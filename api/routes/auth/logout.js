// @flow
import { Router } from 'express'

// TODO(@morajabi): Destroy session from workHours, etc
const IS_PROD = process.env.NODE_ENV === 'production'
const HOME = IS_PROD ? '/' : 'http://localhost:3000/'
const logoutRouter = Router()

logoutRouter.get('/', (req: express$Request, res: express$Response) => {
  // $FlowIssue
  req.session = null
  return res.redirect(HOME)
})

export default logoutRouter
