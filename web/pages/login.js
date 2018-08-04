// @flow
import React, { Component } from 'react'

// Utilities
import { SERVER_URL, CLIENT_URL } from '../utils/api'

// Local
import AppNav from '../components/App/Nav'
import LoginForm from '../components/Login/Form'
import LoginButton from '../components/Login/Button'

class Login extends Component<{}> {
  render() {
    return (
      <>
        <AppNav authenticated={false} title="Login to your account!" />
        <LoginForm>
          <LoginButton method="google" onClick={this.googleClicked} />
        </LoginForm>
      </>
    )
  }

  redirectUrl = `${CLIENT_URL}/app`

  googleClicked = () => {
    window.location.assign(`${SERVER_URL}/auth/google?r=${this.redirectUrl}`)
  }
}

export default Login
