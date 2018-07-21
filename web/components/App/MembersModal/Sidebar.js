// @flow
import React, { Component } from 'react'

// Local
import SearchBar from './SearchBar'

type Props = {}
type State = {
  inputValue: string,
}
export default class Sidebar extends Component<Props, State> {
  state = {
    inputValue: '',
  }
  render() {
    return (
      <div>
        <SearchBar
          value={this.state.inputValue}
          onChange={e => this.setState({ inputValue: e.target.value })}
          placeholder="Find..."
        />
      </div>
    )
  }
}
