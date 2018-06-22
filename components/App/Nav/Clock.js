import { PureComponent } from 'react'
import styled from 'styled-components'
import ms from 'ms'

class Clock extends PureComponent {
  constructor(...p) {
    super(...p)
    this.state = { time: this.getTime() }
  }

  timerId = null

  componentDidMount() {
    // Update time every 1 minute
    this.timerId = setInterval(this.tick, ms('1s'))
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    const time = this.getTime()
    this.setState({ time })
  }

  getTime = () => {
    const currentDate = new Date()
    const time = currentDate.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      weekday: 'short',
      hour12: true,
    })

    return time
  }

  render() {
    return <Wrapper>{this.state.time}</Wrapper>
  }
}

export default Clock

// Styles
const Wrapper = styled.div`
  font-size: ${p => p.theme.fontDefault16}px;
  line-height: 1;
  font-weight: 200;
  font-variant-numeric: tabular-nums;
  color: ${p => p.theme.grayDark1};
  cursor: default;
`
