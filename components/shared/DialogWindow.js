// @flow
import * as React from 'react'
import styled from 'styled-components'

type Props = {
  width?: number,
  maxHeight?: number,
  children: any,
}

const ModalDialog = ({
  width = 600,
  maxHeight,
  children,
  className,
}: Props) => (
  <Wrapper width={width} maxHeight={maxHeight}>
    {children}
  </Wrapper>
)

export default ModalDialog

// Styles
const Wrapper = styled.div`
  height: auto;
  max-height: ${p => (p.maxHeight ? `${p.maxHeight}px` : `auto`)};
  width: 100%;
  max-width: ${p => p.width}px;
  background: white;
  border-radius: ${p => p.theme.radiusSmall}px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.02);
`
