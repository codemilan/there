import styled from 'styled-components'
import { string, arrayOf } from 'prop-types'

// Utils
import {
  mapStatusToColor,
  personStatusPropType,
  personSizePropType,
  photoSizesMap,
  photoSizeToBorderSizeMap,
  photoSizeToWhiteGapMap,
} from './helpers'

// Local
import { RetinaImage } from '../../shared/RetinaImage'

const PhotoOnMap = props => {
  const { status, size: sizeName, photoSrcSet } = props
  const borderWidth = photoSizeToBorderSizeMap[sizeName]
  const whiteGap = photoSizeToWhiteGapMap[sizeName]
  const size = photoSizesMap[sizeName]

  return (
    <Wrapper size={size} whiteGap={whiteGap} borderWidth={borderWidth}>
      <CircleWrapper status={status}>
        <Photo srcSet={photoSrcSet} />
      </CircleWrapper>
    </Wrapper>
  )
}

PhotoOnMap.defaultProps = {
  status: 'focus',
  size: 'large',
  photoSrcSet: ['/static/profiles/Guillermo_Rauch.jpg'],
}

PhotoOnMap.propTypes = {
  photoSrcSet: arrayOf(string).isRequired,
  status: personStatusPropType.isRequired,
  size: personSizePropType.isRequired,
}

export default PhotoOnMap

// Styles
const Wrapper = styled.div`
  --white-gap: ${p => p.whiteGap}px;
  --border-width: ${p => p.borderWidth}px;
  --size: calc(${p => p.size - p.borderWidth * 2}px);

  /* Space for borders */
  margin: var(--border-width);
`

const CircleWrapper = styled.div`
  width: var(--size);
  height: var(--size);
  display: inline-flex;
  overflow: hidden;

  box-shadow: 0 0 0 var(--white-gap) white,
    0 0 0 var(--border-width) ${p => mapStatusToColor[p.status]},
    0 4px 12px 1px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
`

const Photo = styled(RetinaImage)`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`
