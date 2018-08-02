// @flow
import styled, { css } from 'styled-components'

// Local
export { InlineButton } from './InlineButton'

const BaseButton = styled.button`
  min-width: 98px;
  padding: 7px 11px;
  margin-right: 10px;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 1px 1px rgba(22, 34, 37, 0.06);
  border-radius: 3px;
  cursor: pointer;
  outline: none;

  font-size: 15px;
  font-weight: 300;
  text-align: center;
  letter-spacing: 0.02em;

  ${p => (p.blue ? css`` : css``)};
`

export const PrimaryButton = styled(BaseButton)`
  background: #3daae8;
  color: #fff;

  &:hover {
    background: #3597d0;
  }
`

export const SecondaryButton = styled(BaseButton)`
  color: #333333;
  &:hover {
    background: #f3f3f3;
  }
`
