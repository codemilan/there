import { Component } from 'react'
import styled from 'styled-components'

// Local
import { InlineButton } from '../../shared/Buttons'

class Status extends Component {
  render() {
    return (
      <Wrapper>
        <Circle variant="working" />
        <Text>You’re working until 5pm</Text>
        <InlineButton>change</InlineButton>
      </Wrapper>
    )
  }
}

export default Status

// Styles
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const mapVarientToBg = {
  working: p => p.theme.green,
  sleep: p => p.theme.primaryDark2,
}

const Circle = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${p => mapVarientToBg[p.variant]};

  margin-right: 6px;
`

const Text = styled.div`
  font-size: 16px;
  line-height: 1;
  color: ${p => p.theme.grayDark2};

  margin-right: 6px;
`
