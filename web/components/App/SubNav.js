// @flow
import * as React from 'react'
import styled, { css } from 'styled-components'

// Local
import { Container } from '../shared/Container'

type Props = {
  children?: React.Node,
  flexAlign?: string,
}

const SubNav = ({ flexAlign, children }: Props) => (
  <Wrapper>
    <FlexContainer flexAlign={flexAlign}>{children}</FlexContainer>
  </Wrapper>
)

export default SubNav

// Styles
const Wrapper = styled.nav`
  padding: 4px 0;
`

const FlexContainer = styled(Container)`
  ${p =>
    p.flexAlign &&
    css`
      display: flex;
      justify-content: ${p.flexAlign};
    `};
`
