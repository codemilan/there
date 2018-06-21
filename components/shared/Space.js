import { number, bool } from 'prop-types'
import styled, { css } from 'styled-components'

export const Space = styled.div`
  width: ${p => p.width || 0}px;
  height: ${p => p.height || 0}px;
  pointer-events: none;

  ${p =>
    p.fillColumn &&
    css`
      margin-top: auto;
      margin-bottom: auto;
    `};

  ${p =>
    p.fillRow &&
    css`
      margin-right: auto;
      margin-left: auto;
    `};
`

Space.propTypes = {
  width: number,
  height: number,
  fillRow: bool,
  fillColumn: bool,
}

export default Space
