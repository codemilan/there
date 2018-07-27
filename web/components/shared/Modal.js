// @flow
import * as React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'

// Local
import Overlay from './Overlay'
import DialogWindow from './DialogWindow'

export type Props = {
  width?: number,
  height?: number,
  children: any,
  isOpen: boolean,
  onClose: () => void,
}

export default class Modal extends React.Component<Props> {
  static defaultProps = {
    isOpen: false,
  }

  modalRoot: ?Element =
    typeof window !== 'undefined' ? document.getElementById('modal-root') : null

  render() {
    const { children, isOpen, width, height } = this.props

    const modal = (
      <Overlay
        onClick={this.overlayClicked}
        pointerEvents={isOpen ? 'auto' : 'none'}
      >
        <PoseGroup>
          {isOpen && [
            <FadingShadowBg key="shadow" />,
            <PoppingDialog key="modal" width={width} height={height}>
              {children}
            </PoppingDialog>,
          ]}
        </PoseGroup>
      </Overlay>
    )

    if (!this.modalRoot) {
      return null
    }

    return ReactDOM.createPortal(modal, this.modalRoot)
  }

  close = () => {
    this.props.onClose()
  }

  overlayClicked = (e: SyntheticEvent<HTMLDivElement>) => {
    e.stopPropagation()

    if (e.currentTarget !== e.target) {
      return
    }

    this.close()
  }

  onKeyDown = (e: KeyboardEvent) => {
    if (e.code !== 'Escape' || !this.props.isOpen) {
      return
    }

    this.props.onClose()
  }

  componentDidMount() {
    if (this.props.isOpen) {
      // $FlowFixMe
      document.body.style.overflow = 'hidden'
    }

    // Listen for Escape key
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentDidUpdate() {
    // $FlowFixMe
    document.body.style.overflow = this.props.isOpen ? 'hidden' : 'unset'
  }

  componentWillUnmount() {
    // $FlowFixMe
    document.body.style.overflow = 'unset'

    // Listen for Escape key
    document.removeEventListener('keydown', this.onKeyDown)
  }
}

const Dialog = ({ width, height, children, innerRef }) => (
  <Aligner key="modal" innerRef={innerRef}>
    <DialogWindow width={width} height={height}>
      {children}
    </DialogWindow>
  </Aligner>
)

// Styles
const Aligner = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  > * {
    pointer-events: auto;
  }

  position: relative;
  z-index: 2;
`

const ShadowBg = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;

  position: absolute;
  z-index: 1;
  opacity: 0;
`

const FadingShadowBg = posed(ShadowBg)({
  enter: {
    opacity: 1,
    transition: props => ({ ...props, type: 'tween', duration: 140 }),
  },
  exit: {
    opacity: 0,
    transition: props => ({ ...props, type: 'tween', duration: 140 }),
  },
})

const PoppingDialog = posed(Dialog)({
  enter: {
    scale: 1,
    opacity: 1,
    transition: props => ({
      ...props,
      type: 'tween',
      ease: 'easeInOut',
      duration: 120,
    }),
  },
  exit: {
    scale: 0.98,
    opacity: 0,
    transition: props => ({
      ...props,
      type: 'tween',
      ease: 'easeOut',
      duration: 120,
    }),
  },
})
