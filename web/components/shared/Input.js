// @flow
import styled, { css } from 'styled-components'

export const Input = ({ fullWidth = false, preText = false, ...props }) => (
  <Wrapper>
    {preText && <Pre>{preText}</Pre>}
    <InputWrapper {...props} fullWidth={fullWidth} />
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  min-height: 34px;
  /* margin-top: 12px; */
  line-height: 34px;
`

const InputWrapper = styled.input`
  display: inline-block;
  height: 34px;
  padding: 7px 11px;

  border: 1px solid #ecf1f3;
  box-sizing: border-box;
  border-radius: 3px;
  font-size: ${p => p.theme.fontMedium15}px;
  font-weight: 300;
  letter-spacing: 0.04em;

  color: #43535c;

  ${p =>
    p.fullWidth &&
    css`
      width: 100%;
    `} background: #fafafa;
`

const Pre = styled.div`
  margin-right: 8px;
  font-size: ${p => p.theme.fontDefault16}px;
  letter-spacing: 0.04em;

  color: rgba(67, 83, 92, 0.92);
`
