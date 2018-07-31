// @flow
import React from 'react'
import styled from 'styled-components'

export const Label = (props: any) => <StyledLabel>{props.children}</StyledLabel>

const StyledLabel = styled.label`
  display: block;
  font-weight: 500;
  font-size: ${p => p.theme.fontLarge20}px;
  letter-spacing: 0.03em;
  margin-bottom: 12px;

  color: #43535c;
`
