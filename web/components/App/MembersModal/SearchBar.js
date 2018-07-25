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
      <SearchIcon color="#97a5aa" />
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

  background: rgba(0, 0, 0, 0.02);
`

const Icon = styled.div`
  line-height: 1;

  svg {
    display: inline-block;
    stroke: ${(p: ThemedProps) => p.theme.grayDark2};

    path {
      stroke: ${(p: ThemedProps) => p.theme.grayDark2};
    }
  }
`

const Input = styled.input`
  margin-left: 10px;

  background: none;
  border: none;
  outline: none;

  ::placeholder {
    color: #97a5aa;
    font-weight: 300;
  }
`
