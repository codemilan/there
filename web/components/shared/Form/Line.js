// @flow
import React from 'react'
import styled from 'styled-components'

export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-top: ${p => (p.top ? p.top : 0)}px;
  margin-bottom: ${p => (p.bottom ? p.bottom : 0)}px;
  background: #ecf1f3;
`

export const MediumGapLine = () => <Line top={25} bottom={25} />
export const SmallGapLine = () => <Line top={10} bottom={10} />
