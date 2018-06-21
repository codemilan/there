import { css } from 'styled-components'

export const retina = styles => css`
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    ${styles};
  }
`
