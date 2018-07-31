// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

// Local
import { inputStyle } from './Input'
import Close from './vectors/Close'

type Props = {
  +selections: Set<string>,
  onChange: (Set<string>) => void,
}

type State = {
  inputValue: string,
}

export default class MultipleInput extends Component<Props, State> {
  state = {
    inputValue: '',
  }

  render = () => {
    const { selections, onChange, ...props } = this.props

    return (
      <Wrapper>
        <Selections>
          {Array.from(selections).map(selection => (
            <Tag key={selection}>
              <TagText>{selection}</TagText>
              <Close onClick={() => this.removed(selection)} />
            </Tag>
          ))}
        </Selections>
        <Input
          value={this.state.inputValue}
          onChange={e => this.setState({ inputValue: e.target.value })}
          onKeyDown={this.handleKeyDown}
          {...props}
        />
      </Wrapper>
    )
  }

  removed = (removedSelection: string) => {
    const selections = new Set(this.props.selections)
    selections.delete(removedSelection)
    // Notify the parent to update the state
    this.props.onChange(selections)
  }

  handleKeyDown = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const selections = new Set(this.props.selections)
      selections.add(e.currentTarget.value)
      this.setState({ inputValue: '' })
      this.props.onChange(selections)
    }

    if (e.currentTarget.value === '' && e.key === 'Backspace') {
      const selections = new Set(this.props.selections)
      var lastValue = Array.from(selections).pop()
      selections.delete(lastValue)
      this.props.onChange(selections)
    }
  }
}

// Styles
const Wrapper = styled.div`
  ${inputStyle};

  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const Input = styled.input`
  height: 100%;
  padding-left: 10px;
  flex-grow: 1;
  background: none;
  border: none;
  outline: none;
`

const Selections = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Tag = styled.div`
  padding: 2px 5px;
  margin-right: 5px;
  margin-bottom: 1px;
  background: #d9e4e9;
  border-radius: 2px;

  font-size: 15px;
  letter-spacing: 0.01em;
  color: rgba(67, 83, 92, 0.92);
`

const TagText = styled.span`
  margin-right: 3px;
`
