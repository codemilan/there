import { Children } from 'react'
import styled, { css } from 'styled-components'

// Veriables
const gap = 8

const PeopleGroup = ({ point, children }) => {
  // To center align last odd item
  const childrenCount = Children.count(children)
  const isOdd = childrenCount % 2 > 0

  return (
    <Wrapper point={point} isOdd={isOdd}>
      {children}
    </Wrapper>
  )
}

export default PeopleGroup

// Styles
const Wrapper = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${gap}px;

  ${p =>
    p.isOdd &&
    css`
      & > *:last-child {
        grid-column: 1 / 3;
        text-align: center;
      }
    `};

  ${p =>
    p.point &&
    css`
      position: absolute;
      left: ${p => p.point.x}px;
      top: ${p => p.point.y}px;

      transform: translate3d(-50%, -50%, 0);
      transform-origin: center;
    `};
`
