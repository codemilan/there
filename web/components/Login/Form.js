// @flow
import React from 'react'
import styled from 'styled-components'

// Local
import Button from './Button'
import { InlineButton } from '../shared/Buttons'
import WhiteInput from '../shared/WhiteInput'
import type { LogInMethods } from '../shared/types'

type Props = {
  onChoose: (method: LogInMethods) => void,
}

const LoginForm = ({ onChoose }: Props) => (
  <Wrapper>
    <Button method="google" onClick={() => onChoose('google')} />
    <Button method="twist" onClick={() => onChoose('twist')} />
    <WhiteInput width="100%" />
    <Alternative>
      You can also{' '}
      <InlineButton onClick={() => onChoose('email')}>
        continue with email
      </InlineButton>
    </Alternative>
  </Wrapper>
)

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

const Alternative = styled.div`
  margin-top: 2px;
  font-size: ${p => p.theme.fontSmall13}px;
  color: ${p => p.theme.grayDark2};

  > * {
    color: ${p => p.theme.grayDark2};
  }
`
