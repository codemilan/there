// @flow
import React from 'react'
import styled from 'styled-components'

// Local
const LoginForm = (props: any) => <Wrapper {...props} />

export default LoginForm

// Styles
const Wrapper = styled.div`
  margin-top: 25vh;
  margin-bottom: 17vh;
  margin-left: auto;
  margin-right: auto;

  max-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
`
