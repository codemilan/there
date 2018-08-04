// @flow
import { Router } from 'express'
import googleAuthRoutes from './google'
import logoutRoutes from './logout'

const authRouter = Router()

authRouter.use('/google', googleAuthRoutes)
authRouter.use('/logout', logoutRoutes)

export default authRouter
