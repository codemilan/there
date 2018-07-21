import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import { resetIdCounter } from 'downshift'

// Utils
import { modernNormalizeStyles, documentStyles } from '../utils/styles/global'
import config from '../utils/config'

export default class MyDocument extends Document {
  ALPHA_BUILD = process.env.ALPHA_BUILD

  static getInitialProps({ renderPage }) {
    resetIdCounter()

    // Styles
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <title>There</title>

          {this.ALPHA_BUILD && (
            // Disallow search engines indexing on alpha builds
            <meta name="robots" content="nofollow, noindex" />
          )}

          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans|Poppins"
            rel="stylesheet"
          />

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: heapScript }}
          />

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  ${modernNormalizeStyles}
  ${documentStyles}
`

const heapScript = `
  window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
  heap.load("${config.heapAppId}");
`
