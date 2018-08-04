// @flow
/**
 * The entry point for the server, this is where everything starts
 */
const debug = require('debug')('api')
debug('Server starting...')
debug('logging with debug enabled!')
import express from 'express'
import compression from 'compression'

// Local
import Raven from 'shared/Raven'
import { applyGraphQlMiddleware } from './graphql'
import { init as initPassport } from './authentication'
import middlewares from './routes/middlewares'
import authRoutes from './routes/auth'

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001

// API server
const app = express()

// Initialize passport
initPassport()

// Trust the now proxy
app.set('trust proxy', true)

// Send all responses as gzip
app.use(compression())

app.use(middlewares)

app.use('/auth', authRoutes)

// Connect the express app to Apollo GraphQL server
applyGraphQlMiddleware({ app })

// Start Express server
app.listen(PORT)
debug(`🚀  API Server started running at http://localhost:${PORT}/`)

// Handle unexpected errors
// From https://github.com/withspectrum/spectrum
process.on('unhandledRejection', async err => {
  console.error('Unhandled rejection', err)
  try {
    await new Promise(resolve => Raven.captureException(err, resolve))
  } catch (err) {
    console.error('Raven error', err)
  } finally {
    process.exit(1)
  }
})

process.on('uncaughtException', async err => {
  console.error('Uncaught exception', err)
  try {
    await new Promise(resolve => Raven.captureException(err, resolve))
  } catch (err) {
    console.error('Raven error', err)
  } finally {
    process.exit(1)
  }
})
