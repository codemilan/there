// @flow
import React, { Component } from 'react'

// Utilities
import { SERVER_URL, CLIENT_URL } from '../utils/api'

// Local
import AppNav from '../components/App/Nav'
import LoginForm from '../components/Login/Form'
import type { LogInMethods } from '../components/shared/types'

type State = {
  emailChosen: boolean,
  emailValue: string,
}

class Login extends Component<{}, State> {
  state = {
    emailChosen: false,
    emailValue: '',
  }

  render() {
    return (
      <>
        <AppNav authenticated={false} title="Login to your account!" />
        <LoginForm
          emailChosen={this.state.emailChosen}
          emailValue={this.state.emailValue}
          onEmailSend={this.emailSent}
          onChoose={this.choosed}
        />
      </>
    )
  }

  choosed = (method: LogInMethods) => {
    const redirectUrl = `${CLIENT_URL}/app`

    switch (method) {
      case 'google':
        window.location.assign(`${SERVER_URL}/auth/google?r=${redirectUrl}`)

      case 'email':
        this.setState({ emailChosen: true })

      default:
        return
    }
  }

  emailSent = () => {
    const { emailValue: email } = this.state

    // Send email
  }
}

export default Login
