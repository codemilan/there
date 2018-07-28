// @flow
import styled from 'styled-components'

export const Label = props => <LabelWrapper>{props.children}</LabelWrapper>

const LabelWrapper = styled.label`
  display: block;
  font-weight: 500;
  font-size: ${p => p.theme.fontLarge20};
  letter-spacing: 0.03em;
  margin-bottom: 12px;

  color: #43535c;
`
