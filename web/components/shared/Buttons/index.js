// @flow
import React from 'react'
import styled from 'styled-components'

// Local
export { PrimaryButton } from './PrimaryButton'

export const InlineButton = (props: any) => <InlineButtonWrapper {...props} />

// Styles
const InlineButtonWrapper = styled.button`
  padding: 0 1px;
  font-size: ${p => p.theme.fontSmall13}px;
  line-height: 1;

  border: none;
  cursor: pointer;
  background: none;
  text-decoration: underline;
  text-decoration-color: ${p => p.theme.grayLight1};
  color: ${p => p.theme.tealDark1};

  transition: color 120ms ease, background 120ms ease;

  &:hover {
    color: ${p => p.theme.grayDark2};
    background: ${p => p.theme.grayLight1};
  }
`
