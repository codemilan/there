// @flow
import styled from 'styled-components'

// Local
import { hideScrollBars } from '../../utils/styles/snippets'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${p => p.theme.ZIndexModals};
  pointer-events: ${p => p.pointerEvents || 'auto'};

  ${hideScrollBars};
`

export default Overlay
