//@flow
import * as React from 'react'
import styled from 'styled-components'

type Prop = {
  textColor?: string,
  children?: React.Node,
}

const Hint = ({ textColor, children }: Prop) => (
  <HintWithStyle textColor={textColor}>{children}</HintWithStyle>
)

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
