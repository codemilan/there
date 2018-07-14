// @flow
import React from 'react'
import styled from 'styled-components'

// Local
import Modal from '../../shared/Modal'

type Props = {
  onClose: () => void,
}

export default (props: Props) => (
  <Modal width={750} height={400} {...props}>
    <Stack>
      <Sidebar />
      <Details>x</Details>
    </Stack>
  </Modal>
)

// Styles
const Stack = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 230px 1fr;
`

const Sidebar = styled.div`
  padding: 20px;
  background: ${p => p.theme.grayLight1};
`

const Details = styled.div``
