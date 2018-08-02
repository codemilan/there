import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${p => p.theme.containerWidth}px;
  margin: 0 auto;
`

export const NarrowContainer = styled.div`
  max-width: ${p => p.theme.containerNarrowWidth}px;
  margin: 0 auto;
`
