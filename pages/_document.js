import Document, { Head, Main, NextScript } from 'next/document'
import styled, { ServerStyleSheet, injectGlobal } from 'styled-components'
import { resetIdCounter } from 'downshift'

// Utils
import { modernNormalizeStyles, documentStyles } from '../utils/styles/global'

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

          {this.props.styleTags}
        </Head>
        <body>
          <AppRoot>
            <Main />
          </AppRoot>
          <ModalRoot />
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

// Styles
const AppRoot = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
`

const ModalRoot = styled.div.attrs({ id: 'modal-root' })`
  pointer-events: auto;
`
