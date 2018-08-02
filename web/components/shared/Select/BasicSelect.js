import { Component } from 'react'
import styled from 'styled-components'
import Downshift from 'downshift'

// Local
import { Wrapper as DropdownWrapper, ButtonItem } from '../DropdownMenu'
import ChevronDown from '../vectors/ChevronDown'

type Props = {
  items: string[],
  defaultSelectedItem: string,
  onChange: s => void,
}

class BasicSelect extends Component {
  render() {
    const {
      onChange,
      items,
      defaultSelectedItem,
      itemToString = item => item || '',
    }: Props = this.props

    return (
      <Downshift
        itemToString={itemToString}
        defaultSelectedItem={defaultSelectedItem}
        onChange={selection => onChange(selection)}
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
              <SelectValue>{inputValue ? inputValue : 'Admin'}</SelectValue>

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

export default BasicSelect

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
  border: none;
  border-radius: ${p => p.theme.radiusSmall}px;
  background: none;
  outline: none;
  transition: border 120ms ease;

  &:focus {
    border-color: ${p => p.theme.grayDark1};
    color: ${p => p.theme.grayDark3};
  }
  &:hover {
    background: #f9f9f9;
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

const SelectValue = styled.div`
  margin-right: 10px;
`
