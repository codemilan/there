// @flow
import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  fullWidth: boolean,
}

export const Input = ({ fullWidth = false, ...props }: Props) => (
  <StyeldInput {...props} fullWidth={fullWidth} />
)

// Styles
export const inputStyle = css`
  min-height: 34px;
  padding: 7px 11px;

  border: 1px solid #ecf1f3;
  box-sizing: border-box;
  border-radius: 3px;
  font-size: ${({ theme }) => theme.fontMedium15}px;
  font-weight: 300;
  letter-spacing: 0.04em;

  color: #43535c;
  background: #fafafa;

  ${p =>
    p.fullWidth &&
    css`
      width: 100%;
    `};
`

const StyeldInput = styled.input`
  ${inputStyle};
`
