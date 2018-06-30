import { Children } from 'react'
import styled, { css } from 'styled-components'

// Utils
import { photoSizeToGapMap, personSizePropType, photoSizesMap } from './helpers'

// Veriables
const PeopleGroup = ({ point, size, children }) => {
  // To center align last odd item
  const childrenCount = Children.count(children)
  const shouldVertical = childrenCount < 3
  const isOdd = childrenCount % 2 > 0
  const gap = photoSizeToGapMap[size]
  const radius = photoSizesMap[size] / 2

  return (
    <Wrapper
      point={point}
      isOdd={isOdd}
      shouldVertical={shouldVertical}
      gap={gap}
      radius={radius}
    >
      {children}
    </Wrapper>
  )
}

PeopleGroup.defaultProps = {
  size: 'tiny',
}

PeopleGroup.propTypes = {
  size: personSizePropType.isRequired,
}

export default PeopleGroup

// Styles
const Wrapper = styled.div`
  display: inline-grid;
  grid-gap: ${p => p.gap}px;

  border-radius: ${p => p.radius}px;

  ${p =>
    p.isOdd &&
    css`
      & > *:last-child {
        /* grid-column: 1 / 3; */
        display: flex;
        justify-content: center;
      }
    `};

  ${p =>
    Math.sign(p.gap) === -1 &&
    css`
      & > * {
        margin-top: ${p.gap}px;
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

      &:hover {
        z-index: 3;
      }
    `};
`
