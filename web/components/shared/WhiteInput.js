// @flow
import React from 'react'
import styled from 'styled-components'

type Props = {
  width?: string | number,
  className?: string,
  style?: any,
}

const WhiteInput = ({ style, className, width, ...props }: Props) => (
  <Wrapper style={style} className={className} width={width}>
    <StyledInput {...props} />
  </Wrapper>
)

export default WhiteInput

// Styles
const Wrapper = styled.div`
  height: 34px;
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}px`)};
  padding: 3px 9px;
  display: flex;
  align-items: stretch;

  font-size: ${p => p.theme.fontDefault16}px;

  border-radius: ${p => p.theme.radiusSmall}px;
  border: 1px solid ${p => p.theme.gray};
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.05);
  background: white;
  cursor: text;
`

const StyledInput = styled.input`
  outline: none;
  background: none;
  border: none;
`
