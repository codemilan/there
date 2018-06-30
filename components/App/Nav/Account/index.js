import { Component } from 'react'
import styled from 'styled-components'
import ClickOut from 'react-onclickout'

// Local
import Button from './Button'
import Dropdown from './Dropdown'

export default class Account extends Component {
  state = {
    isOpen: false,
  }

  render() {
    const { isOpen } = this.state

    return (
      <ClickOut onClickOut={this.closed}>
        <RelativeWrapper>
          <Button
            active={isOpen}
            firstName="Guillermo"
            photoUrl="/static/profiles/Guillermo_Rauch.jpg"
            onClick={this.toggled}
          />
          <Dropdown isOpen={isOpen} />
        </RelativeWrapper>
      </ClickOut>
    )
  }

  toggled = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
  }

  closed = () => {
    if (!this.state.isOpen) {
      return
    }

    this.setState({ isOpen: false })
  }
}

// Styles
const RelativeWrapper = styled.div`
  position: relative;
  font-family: 'Poppins', var(--system-font);
`
