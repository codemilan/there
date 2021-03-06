/* @flow
 *
 * A reusable set of routes for signing in with different providers. Handles token-based authentication.
 * Usage:
 *
 * const { main, callbacks } = createSigninRoutes('google');
 * googleRouter.get('/', main);
 * googleRouter.get('/callback', ...callbacks);
 *
 * -> Taken from withspectrum/spectrum
 */
import { URL } from 'url'
import passport from 'passport'
import isThereUrl from '../../utils/is-there-url'
import { signCookie, getCookies } from 'shared/cookie-utils'

const IS_PROD = process.env.NODE_ENV === 'production'
const FALLBACK_URL = IS_PROD
  ? 'https://new.there.pm/app'
  : 'http://localhost:3000/app'

type Strategy = 'google'

export const createSigninRoutes = (
  strategy: Strategy,
  strategyOptions?: Object,
) => {
  return {
    // The main route takes care of storing the redirect URL in the session
    // and passing the right options
    main: (req: express$Request, ...rest: any) => {
      let url = FALLBACK_URL
      if (typeof req.query.r === 'string' && isThereUrl(req.query.r)) {
        url = req.query.r
      }

      // Attach the redirectURL and authType to the session so we have it in the /auth/twitter/callback route
      // $FlowIssue
      req.session.redirectUrl = url
      if (req.query.authType === 'token') {
        // $FlowIssue
        req.session.authType = 'token'
      }

      return passport.authenticate(strategy, strategyOptions)(req, ...rest)
    },
    // The callbacks take care of authenticating, setting the response cookies,
    // redirecting to the right place and handling tokens
    callbacks: [
      passport.authenticate(strategy, {
        failureRedirect: IS_PROD ? '/' : 'http://localhost:3000/',
      }),
      (req: express$Request, res: express$Response) => {
        // $FlowIssue
        const redirectUrl = req.session.redirectUrl
          ? new URL(req.session.redirectUrl)
          : new URL(FALLBACK_URL)
        redirectUrl.searchParams.append('authed', 'true')

        // Add the session cookies to the query params if token authentication
        if (
          // $FlowIssue
          req.session.authType === 'token' &&
          req.session.passport &&
          req.session.passport.user
        ) {
          const cookies = getCookies({ userId: req.session.passport.user })

          redirectUrl.searchParams.append(
            'accessToken',
            signCookie(
              `session=${cookies.session}; session.sig=${
                cookies['session.sig']
              }`,
            ),
          )
        }

        // $FlowIssue
        req.session.authType = undefined
        // Delete the redirectURL from the session again so we don't redirect
        // to the old URL the next time around
        // $FlowIssue
        req.session.redirectUrl = undefined
        return res.redirect(redirectUrl.href)
      },
    ],
  }
}
