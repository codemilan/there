// @flow
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

// Local
import db from './db'

const IS_PROD = !process.env.FORCE_DEV && process.env.NODE_ENV === 'production'

const GOOGLE_OAUTH_CLIENT_SECRET = IS_PROD
  ? process.env.GOOGLE_OAUTH_CLIENT_SECRET
  : process.env.GOOGLE_OAUTH_CLIENT_SECRET_DEVELOPMENT

const GOOGLE_OAUTH_CLIENT_ID = IS_PROD
  ? '122218890004-7dj1vghp24i2ggsj1m92thnd605ks1n1.apps.googleusercontent.com'
  : '122218890004-c9m9dvh7fdvf52biis1m96lqllorn7p2.apps.googleusercontent.com'

const init = () => {
  // Setup user serialization
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    db.query
      .user({ where: { id } })
      .then(user => {
        done(null, user)
        return null
      })
      .catch(err => {
        done(err)
        return null
      })
  })

  // Set up Google login
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_OAUTH_CLIENT_ID,
        clientSecret: GOOGLE_OAUTH_CLIENT_SECRET,
        callbackURL: IS_PROD
          ? 'https://v2.api.there.pm/auth/google/callback'
          : 'http://localhost:3001/auth/google/callback',
      },
      (accessToken, refreshToken, profile, cb) => {
        // TODO: Actual auth, currently it's a mock
        return cb(null, { id: 'xsacdeadejewkqndj' })
      },
    ),
  )
}

export { init }
