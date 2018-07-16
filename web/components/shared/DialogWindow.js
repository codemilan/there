// @flow
import * as React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  width?: number,
  height?: number,
  children: any,
}

const ModalDialog = ({ width = 600, height, children, className }: Props) => (
  <Wrapper width={width} height={height}>
    {children}
  </Wrapper>
)

export default ModalDialog

// Styles
const Wrapper = styled.div`
  height: auto;
  width: 100%;
  max-width: ${p => p.width}px;
  background: white;
  border-radius: ${p => p.theme.radiusSmall}px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.02);

  ${p =>
    p.height &&
    css`
      height: 100%;
      max-height: ${p.height}px;
    `};
`
