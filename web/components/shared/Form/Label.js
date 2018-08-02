// @flow
import React from 'react'
import styled from 'styled-components'

export const Label = (props: any) => <StyledLabel {...props} />

const StyledLabel = styled.label`
  display: block;
  font-size: ${p => p.theme.fontLarge14}px;
  margin-bottom: 26px;

  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #bec9d1;

  > div,
  > input {
    margin-top: 8px;
  }
`
