// @flow
import React from 'react'
import styled, { css } from 'styled-components'

// Local
import Check from '../shared/vectors/Check'

type Props = {
  fullWidth?: boolean,
  valid?: boolean,
}

export const Input = ({
  fullWidth = false,
  valid = false,
  ...props
}: Props) => (
  <Wrapper>
    <StyledInput {...props} fullWidth={fullWidth} />
    {valid && (
      <CheckContainer>
        <Check />
      </CheckContainer>
    )}
  </Wrapper>
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

const Wrapper = styled.div`
  position: relative;
`

const StyledInput = styled.input`
  ${inputStyle};
`

const CheckContainer = styled.div`
  position: absolute;
  height: 34px;
  top: 0;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 35px;
`
