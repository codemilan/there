// @flow
import { Router } from 'express'
import jwt from 'jsonwebtoken'

// Local
import Raven from 'shared/raven'
import logging from './logging'

const middlewares: express$Router = Router()

if (process.env.NODE_ENV === 'development') {
  middlewares.use(logging)
}

if (process.env.NODE_ENV === 'production' && !process.env.FORCE_DEV) {
  // Raven (Sentry client) needs to come before everything else
  middlewares.use(Raven.requestHandler())
}

// $FlowIssue
middlewares.use(
  (req: express$Request, res: express$Response, next: () => void) => {
    if (req.headers && req.headers.authorization) {
      const token = req.headers.authorization.replace(/^\s*Bearer\s*/, '')
      try {
        const decoded = jwt.verify(token, process.env.API_TOKEN_SECRET || '')
        if (decoded.cookie) req.headers.cookie = decoded.cookie
      } catch (err) {}
    }
    next()
  },
)

// Cross origin request support
import cors from './cors'
middlewares.use(cors)
middlewares.options('*', cors)

import cookieParser from 'cookie-parser'
middlewares.use(cookieParser())

import session from 'shared/middlewares/session'
middlewares.use(session)

import passport from 'passport'
middlewares.use(passport.initialize())
middlewares.use(passport.session())

export default middlewares
