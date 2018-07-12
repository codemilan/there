// @flow
import * as React from 'react'
import styled from 'styled-components'

interface IProps {
  children: string;
}

const Modal = ({ children }: IProps) => (
  <Wrapper next>{children.toLowerCase()}</Wrapper>
)

export default Modal

// Styles
interface WrapperProps {
  next?: boolean;
}

const Wrapper = styled.div`
  background: ${(p: WrapperProps) => (p.next ? `black` : `blue`)};
  background: ${p => (p.next ? `black` : `blue`)};
`
