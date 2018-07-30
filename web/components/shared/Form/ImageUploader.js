//@flow
import React from 'react'
import styled from 'styled-components'

type Props = {
  src: boolean,
}

const ImageUploader = ({ src = false, ...props }: Props) => (
  <Wrapper>
    <ImgWrapper>{src && <img src={src} alt="" />}</ImgWrapper>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
`
const ImgWrapper = styled.div`
  width: 74px;
  height: 74px;
  padding: 3px;

  background: #f9f9f9;
  border: 1px solid #ecf1f3;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }

  &:hover {
    box-shadow: 0 0 3px #f5ecec;
  }
`

export default ImageUploader
