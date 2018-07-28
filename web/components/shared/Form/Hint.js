//@flow
import React from 'react'
import styled from 'styled-components'

const Hint = props => <HintWithStyle>{props.children}</HintWithStyle>

const HintWithStyle = styled.span`
  display: block;
  line-height: 18px;
  margin-top: 8px;
  font-size: ${p => p.theme.fontSmall13}px;
  font-weight: 300;
  letter-spacing: 0.04em;

  color: #97a5aa;
`

export default Hint
