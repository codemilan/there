// @flow
const debug = require('debug')('web:server')
import express from 'express'
import next from 'next'

// Local
import Raven from 'shared/raven'

const PORT = parseInt(process.env.PORT, 10) || 3000
const IS_DEV = process.env.NODE_ENV !== 'production'

const app = next({ dev: IS_DEV, dir: __dirname })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get(
    '/app/teams/:teamSlug/settings',
    (req: express$Request, res: express$Response) => {
      return app.render(req, res, '/app/team/settings', {
        ...req.query,
        ...req.params,
      })
    },
  )

  server.get('*', (req: express$Request, res: express$Response) => {
    return handle(req, res)
  })

  server.listen(PORT, err => {
    if (err) throw err
    debug(`Started listening on http://localhost:${PORT} 🎊`)
  })
})

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
