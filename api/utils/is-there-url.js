// @flow
// Taken from withspectrum/spectrum
import { URL } from 'url'
import { RELATIVE_URL } from 'shared/regexps'
const IS_PROD = process.env.NODE_ENV === 'production'

/**
 * Make sure a URL string is a there.pm URL
 */
export default (url: string): boolean => {
  if (RELATIVE_URL.test(url)) return true

  try {
    const { hostname, protocol } = new URL(url)
    // hostname might be there.pm or subdomain.there.pm, so we use .endsWith
    // We don't just check .contains because otherwise folks could make there.pm.mydomain.com
    const IS_THERE_URL = hostname.endsWith('there.pm')
    const IS_LOCALHOST = hostname === 'localhost'
    const IS_HTTP = protocol === 'https:' || protocol === 'http:'
    // Make sure the passed redirect URL is a there.pm one or (in development) localhost
    if (IS_HTTP && (IS_THERE_URL || (!IS_PROD && IS_LOCALHOST))) {
      return true
    }
  } catch (err) {
    // Swallow URL parsing errors (when an invalid URL is passed) and redirect to the standard one
    console.warn(`Invalid URL ("${url}") passed. Full warn:`)
    console.warn(err)
  }
  return false
}
