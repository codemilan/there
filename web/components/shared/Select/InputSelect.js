import { Component } from 'react'
import styled from 'styled-components'
import Downshift from 'downshift'
import AutosizeInput from 'react-input-autosize'

// Local
import { Wrapper as DropdownWrapper, ButtonItem } from '../DropdownMenu'
import ChevronDown from '../vectors/ChevronDown'

class InputSelect extends Component {
  render() {
    const {
      items = ['Everyone', 'No one'],
      itemToString = item => item || '',
      defaultSelectedItem,
    } = this.props

    return (
      <Downshift
        itemToString={itemToString}
        defaultSelectedItem={defaultSelectedItem}
      >
        {({
          getRootProps,
          getInputProps,
          getToggleButtonProps,
          getLabelProps,
          getItemProps,
          getMenuProps,
          isOpen,
          inputValue,
          selectedItem,
          highlightedIndex,
          selectItemAtIndex,
        }) => (
          <Wrapper {...getRootProps({ refKey: 'innerRef' })}>
            <Button {...getToggleButtonProps()}>
              <Label {...getLabelProps()}>Show</Label>
              <Input
                minWidth={70}
                spellCheck={false}
                placeholder="Filter..."
                {...getInputProps({
                  onClick: e => {
                    e.target.select()
                  },
                  onKeyDown: e => {
                    // Since the parent is the button!
                    e.stopPropagation()

                    if (e.key === 'Enter') {
                      selectItemAtIndex(0)
                    }
                  },
                })}
              />
              <ChevronDown />
            </Button>

            {isOpen && (
              <Dropdown {...getMenuProps({ refKey: 'innerRef' })}>
                {(selectedItem &&
                itemToString(selectedItem).toLowerCase() ===
                  inputValue.toLowerCase()
                  ? items
                  : items.filter(item =>
                      itemToString(item)
                        .toLowerCase()
                        .includes(inputValue.toLowerCase()),
                    )
                ).map((item, index) => (
                  <Option
                    key={itemToString(item)}
                    highlighted={highlightedIndex === index}
                    {...getItemProps({ item, index })}
                  >
                    {itemToString(item)}
                  </Option>
                ))}
              </Dropdown>
            )}
          </Wrapper>
        )}
      </Downshift>
    )
  }
}

export default InputSelect

// Styles
const Wrapper = styled.div`
  --height: 30px;

  position: relative;
`

const Button = styled.button`
  height: var(--height);
  width: auto;
  padding: 0 10px;
  display: inline-flex;
  align-items: center;

  font-size: ${p => p.theme.fontMedium14}px;

  cursor: pointer;
  color: ${p => p.theme.grayDark2};
  border: 1px solid ${p => p.theme.grayLight1};
  border-radius: ${p => p.theme.radiusSmall}px;
  background: none;
  outline: none;
  transition: border 120ms ease;

  &:focus {
    border-color: ${p => p.theme.grayDark1};
    color: ${p => p.theme.grayDark3};
  }
`

const Label = styled.label`
  cursor: pointer;
`

const Input = styled(AutosizeInput).attrs({
  extraWidth: 4,
  style: {
    display: 'inline-flex',
    fontSize: 14,
  },
})`
  height: 100%;
  align-self: stretch;
  display: flex;

  > input {
    font-size: ${p => p.theme.fontMedium14}px;
    vertical-align: middle;

    padding-left: 7px;
    align-self: stretch;

    color: ${p => p.theme.grayDark3};
    border: none;
    background: none;
    outline: none;

    ::placeholder {
      color: ${p => p.theme.grayDark1};
    }
  }
`

const Dropdown = styled(DropdownWrapper)`
  position: absolute;
  top: calc(var(--height) + 4px);
  background: white;
`

const Option = styled(ButtonItem).attrs({
  size: 'small',
})`
  cursor: pointer;
`
