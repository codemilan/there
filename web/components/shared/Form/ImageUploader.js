//@flow
import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  src?: string,
  avatar?: boolean,
}

const ImageUploader = ({ src, avatar, ...props }: Props) => (
  <Wrapper>
    <ImgWrapper avatar={avatar}>{src && <img src={src} alt="" />}</ImgWrapper>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 12px;
`
const ImgWrapper = styled.div`
  background: #f9f9f9;
  border: 1px solid #ecf1f3;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }

  &:hover {
    box-shadow: 0 0 3px #f5ecec;
  }

  ${p =>
    p.avatar
      ? css`
          width: 84px;
          height: 84px;
          border-radius: 100%;
        `
      : css`
          width: 74px;
          height: 74px;
          padding: 3px;
        `};
`

export default ImageUploader
