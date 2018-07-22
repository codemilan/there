// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

// Local
import SearchBar from './SearchBar'

type Props = {}

export default class Sidebar extends Component<Props> {
  render() {
    return (
      <div>
        <SearchBar
          value={this.state.inputValue}
          onChange={e => this.setState({ inputValue: e.target.value })}
          placeholder="Find..."
        />
        <MemberGroup>
          <MembersTitle>Product Design2</MembersTitle>
        </MemberGroup>
      </div>
    )
  }
}

const MemberGroup = styled.div`
  min-height: 100px;
  margin-top: 12px;
  padding-left: 15px;

  font-family: ${p => p.theme.fontSystem};
`

const MembersTitle = styled.div`
  padding: 6px 0;
  font-weight: 600;
  font-size: 11.5px;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: #97a5aa;
`
