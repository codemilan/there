import styled from 'styled-components'

// Local
import { RetinaImage } from '../../shared/RetinaImage'

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  width: 1173px;
  height: 599px;
`

export const MapImage = styled(RetinaImage)`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
`

export const MapOverlays = styled.div`
  position: relative;
`

export const Point = styled.div`
  width: 3px;
  height: 3px;
  background: ${p => p.theme.grayDark2};
  border-radius: 50%;
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.1);

  position: absolute;
  top: ${p => p.y}px;
  left: ${p => p.x}px;
`

export const Rect = styled.div`
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  background: rgba(0, 0, 0, 0.1);

  position: absolute;
  top: ${p => p.y}px;
  left: ${p => p.x}px;
`
