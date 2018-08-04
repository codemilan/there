// @flow
import React from 'react'
import styled, { css } from 'styled-components'

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
  clickable?: boolean,
  onClick?: () => void,
  ring?: boolean,
}

const MemberPhoto = (props: Props) => {
  const {
    status,
    size: sizeName,
    photoSrcSet,
    onClick = () => {},
    clickable = false,
    ring = true,
  } = props
  const borderWidth = photoSizeToBorderSizeMap[sizeName]
  const whiteGap = photoSizeToWhiteGapMap[sizeName]
  const size = photoSizesMap[sizeName]

  return (
    <Wrapper
      clickable={clickable}
      size={size}
      whiteGap={whiteGap}
      borderWidth={borderWidth}
      ring={ring}
      onClick={onClick}
    >
      <CircleWrapper clickable={clickable} status={status} ring={ring}>
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

  border-radius: 50%;
  transition: box-shadow 130ms ease, transform 130ms ease-in-out,
    filter 130ms ease-in-out;

  ${p =>
    p.ring &&
    css`
      box-shadow: var(--white-gap-shadow),
        var(--border-shadow)
          ${p => (p.clickable ? `, 0 3px 10px 2px rgba(0, 0, 0, 0.1);` : ``)};
    `};
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

  ${p =>
    p.clickable &&
    css`
      cursor: pointer;

      &:hover ${CircleWrapper} {
        box-shadow: var(--white-gap-shadow), var(--border-shadow),
          0 4px 10px 3px rgba(0, 0, 0, 0.1);
        transform: scale(1.15);
        filter: contrast(1.01) brightness(1.05);
      }

      &:active ${CircleWrapper} {
        transform: scale(1);
        filter: contrast(0.98) brightness(0.98);
        box-shadow: var(--white-gap-shadow), var(--border-shadow);
      }
    `};
`

const Photo = styled(RetinaImage)`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
  -webkit-user-drag: none;
  user-select: none;
`
