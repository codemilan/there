// @flow
import * as React from 'react'
import styled, { css } from 'styled-components'

// Local
import Check from '../shared/vectors/Check'

type Props = {
  style?: any,
  className?: string,
  width?: any,
  valid?: boolean,
  coloredBg?: boolean,
}

export class Input extends React.Component<Props> {
  input: { current: null | HTMLInputElement } = React.createRef()

  render() {
    const {
      style,
      className,
      width = `auto`,
      valid,
      coloredBg,
      ...props
    } = this.props

    return (
      <Wrapper
        style={style}
        className={className}
        width={width}
        onClick={this.wrapperClicked}
      >
        <StyledInput innerRef={this.input} {...props} />

        {valid && (
          <CheckWrapper>
            <Check />
          </CheckWrapper>
        )}
      </Wrapper>
    )
  }

  wrapperClicked = () => {
    if (!this.input.current) {
      return
    }

    this.input.current.focus()
  }
}

export default Input

// Styles
const Wrapper = styled.div`
  height: 34px;
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}px`)};
  padding: 3px 9px;
  display: flex;
  align-items: stretch;

  margin-top: 4px;
  margin-bottom: 4px;

  border-radius: ${p => p.theme.radiusSmall}px;
  border: 1px solid ${p => p.theme.gray};
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.06);
  background: white;
  cursor: text;
`

const StyledInput = styled.input`
  width: 100%;
  font-size: ${p => p.theme.fontMedium15}px;
  color: #111;
  outline: none;
  background: none;
  border: none;

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`

const CheckWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 35px;
`

export const inputStyle = css`
  height: 34px;
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}px`)};
  padding: 3px 9px;
  display: flex;
  align-items: stretch;

  font-size: ${p => p.theme.fontDefault16}px;

  border-radius: ${p => p.theme.radiusSmall}px;
  border: 1px solid ${p => p.theme.gray};
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.05);
  background: ${p => (p.coloredBg ? p.theme.primaryLight1 : `white`)};
  cursor: text;
`
