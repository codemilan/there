// @flow
import React from 'react'
import styled from 'styled-components'

// Utils
import {
  mapStatusToColor,
  photoSizesMap,
  photoSizeToBorderSizeMap,
  photoSizeToWhiteGapMap,
  type OnMapPhotoSize,
} from './helpers'
import type { MemberStatus } from '../../shared/types'

// Local
import { RetinaImage } from '../../shared/RetinaImage'

type Props = {
  photoSrcSet: string[],
  status: MemberStatus,
  size: OnMapPhotoSize,
  onClick: () => void,
}

const MemberPhoto = (props: Props) => {
  const { status, size: sizeName, photoSrcSet, onClick } = props
  const borderWidth = photoSizeToBorderSizeMap[sizeName]
  const whiteGap = photoSizeToWhiteGapMap[sizeName]
  const size = photoSizesMap[sizeName]

  return (
    <Wrapper
      size={size}
      whiteGap={whiteGap}
      borderWidth={borderWidth}
      onClick={onClick}
    >
      <CircleWrapper status={status}>
        <Photo srcSet={photoSrcSet} />
      </CircleWrapper>
    </Wrapper>
  )
}

export default MemberPhoto

// Styles
const CircleWrapper = styled.div`
  --white-gap-shadow: 0 0 0 var(--white-gap) white;
  --border-shadow: 0 0 0 var(--border-width) ${p => mapStatusToColor[p.status]};

  width: var(--size);
  height: var(--size);
  overflow: hidden;

  cursor: pointer;
  border-radius: 50%;
  box-shadow: var(--white-gap-shadow), var(--border-shadow),
    0 3px 10px 2px rgba(0, 0, 0, 0.1);
  transition: box-shadow 120ms ease, transform 120ms ease, filter 150ms ease;
`

const Wrapper = styled.div`
  --white-gap: ${p => p.whiteGap}px;
  --border-width: ${p => p.borderWidth}px;
  --size: calc(${p => p.size - p.borderWidth * 2}px);

  /* Space for borders */
  padding: calc(var(--border-width));

  /* Override group */
  pointer-events: initial;

  /* Hover styles, cause we need to cover box-shadow */
  border-radius: 50%;
  cursor: pointer;

  &:hover ${CircleWrapper} {
    box-shadow: var(--white-gap-shadow), var(--border-shadow),
      0 4px 12px 3px rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
    filter: contrast(1.01) brightness(1.05);
  }
`

const Photo = styled(RetinaImage)`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`
