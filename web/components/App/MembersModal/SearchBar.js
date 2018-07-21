// @flow
import * as React from 'react'
import styled from 'styled-components'

// Local
import SearchIcon from '../../shared/vectors/Search'
import type { ThemedProps } from '../../../utils/styles/theme'

type Props = {}

const SearchBar = ({ ...props }: Props) => (
  <Wrapper>
    <Icon>
      <SearchIcon />
    </Icon>
    <Input {...props} />
  </Wrapper>
)

export default SearchBar

// Styles
const Wrapper = styled.div`
  height: 40px;
  padding-right: 15px;
  padding-left: 15px;

  display: flex;
  align-items: center;
`

const Icon = styled.div`
  line-height: 1;

  svg {
    display: inline-block;
    stroke: ${(p: ThemedProps) => p.theme.grayDark2};
  }
`

const Input = styled.input`
  background: none;
`