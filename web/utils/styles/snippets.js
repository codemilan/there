// @flow
import { css } from 'styled-components'

export const hideScrollBars: any = css`
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
`
