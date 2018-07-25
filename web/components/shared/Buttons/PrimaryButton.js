// @flow
import React from 'react'
import styled from 'styled-components'

export const PrimaryButton = (props: any) => <WrapperButton {...props} />

const WrapperButton = styled.button`
  display: inline-block;
  height: 30px;
  line-height: 30px;
  padding: 0 15px;
  font-weight: 300;

  background: #3daae8;
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 1px 1px rgba(22, 34, 37, 0.06);
  border-radius: 3px;
  font-size: 14px;
  text-align: center;
`
