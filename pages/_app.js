import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'

// Utils
import theme from '../utils/styles/theme'

export default class MyApp extends App {
  static async getInitialProps({ Component, router: _, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}

// Page Transition Progress
Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeEnd = () => {
  NProgress.done()
}
