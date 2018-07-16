// @flow
import React, { Component } from 'react'

// Local
import SearchBar from './SearchBar'

type Props = {}

export default class Sidebar extends Component<Props> {
  render() {
    return (
      <div>
        <SearchBar value="asdasd" />
      </div>
    )
  }
}
