// @flow
import React from 'react'
import styled from 'styled-components'

// Utilities
import convertColor from '../../utils/convert-color'

// Local
import GoogleIcon from './GoogleIcon'
import TwistIcon from './TwistIcon'
import type { LogInMethods } from '../shared/types'

type Props = {
  method: LogInMethods,
  onClick?: () => void,
}

const mapMethodToText = {
  google: 'Continue with Google',
  twist: 'Continue with Twist',
  email: 'Continue with Email',
}

const mapMethodToIcon = {
  google: <GoogleIcon />,
  twist: <TwistIcon />,
  email: null,
}

const LoginButton = ({ method = 'email', ...props }: Props) => (
  <StyledButton {...props}>
    {mapMethodToIcon[method] && (
      <IconWrapper>{mapMethodToIcon[method]}</IconWrapper>
    )}
    {mapMethodToText[method]}
  </StyledButton>
)

export default LoginButton

// Styles
const StyledButton = styled.button`
  --shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);

  height: 36px;
  padding: 0 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  user-select: none;

  font-weight: 500;
  font-size: ${p => p.theme.fontLarge17}px;

  cursor: pointer;
  color: ${p => convertColor(p.theme.pink, `lightness(-5%)`)};
  border: 1px solid ${p => convertColor(p.theme.pink, `lightness(+20%)`)};
  border-radius: ${p => p.theme.radiusSmall}px;
  background: ${p => p.theme.pinkLight2};
  box-shadow: var(--shadow);
  transition: background 120ms ease;
  outline: none;

  &:focus {
    box-shadow: var(--shadow), 0 0 0 2px rgba(0, 0, 0, 0.05);
  }

  &:hover {
    background: ${p => convertColor(p.theme.pinkLight2, `lightness(-2%)`)};
  }

  &:active {
    background: ${p => convertColor(p.theme.pinkLight2, `lightness(-4%)`)};
  }
`

const IconWrapper = styled.span`
  margin-right: 10px;
  line-height: 1;

  svg {
    width: auto;
    height: 16px;
    margin-top: 1px;
  }

  svg path {
    fill: ${p => p.theme.pink};
  }
`
