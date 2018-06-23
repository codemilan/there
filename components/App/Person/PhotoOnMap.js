import styled from 'styled-components'
import { string, arrayOf } from 'prop-types'

// Utils
import { mapStatusToColor, personStatusPropType } from './helpers'

// Local
import { RetinaImage } from '../../shared/RetinaImage'

const PhotoOnMap = props => {
  const { status, photoSrcSet } = props

  return (
    <CircleWrapper status={status}>
      <Photo srcSet={photoSrcSet} />
    </CircleWrapper>
  )
}

PhotoOnMap.defaultProps = {
  status: 'focus',
  photoSrcSet: ['/static/profiles/Guillermo_Rauch.jpg'],
}

PhotoOnMap.propTypes = {
  photoSrcSet: arrayOf(string).isRequired,
  status: personStatusPropType,
}

export default PhotoOnMap

// Variables
const innerSize = 42
const borderWidth = 4
export const size = innerSize + borderWidth * 2

// Styles
const CircleWrapper = styled.div`
  width: ${innerSize}px;
  height: ${innerSize}px;
  overflow: hidden;

  /* Space for borders */
  margin-top: ${borderWidth}px;
  margin-left: ${borderWidth}px;

  box-shadow: 0 0 0 2px white,
    0 0 0 ${borderWidth}px ${p => mapStatusToColor[p.status]},
    0 4px 12px 1px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
`

const Photo = styled(RetinaImage)`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`
