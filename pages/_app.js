import Router from 'next/router'
import NProgress from 'nprogress'
import App, { Container } from 'next/app'
import styled, { ThemeProvider } from 'styled-components'

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
          <>
            <AppRoot>
              <Component {...pageProps} />
            </AppRoot>
            <ModalRoot />
          </>
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

// Styles
const AppRoot = styled.div.attrs({ id: 'app-root' })`
  width: 100vw;
  height: 100vh;
  overflow: auto;
`

const ModalRoot = styled.div.attrs({ id: 'modal-root' })`
  pointer-events: auto;
`
