// @flow
import React from 'react'
import styled from 'styled-components'

// Local
import Modal from '../../shared/Modal'
import Sidebar from './Sidebar'
import MemberDetails from './MemberDetails'

type Props = {
  selectedMemberId: ?string,
  onMemberSelect: (memberId: string) => void,
  onClose: () => void,
}

const MemebersModal = ({ selectedMemberId, ...props }: Props) => (
  <Modal width={760} height={600} {...props}>
    <Stack>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>

      {selectedMemberId ? (
        <DetailsWrapper>
          <MemberDetails memberId={selectedMemberId} />
        </DetailsWrapper>
      ) : (
        <PleaseSelectMessage />
      )}
    </Stack>
  </Modal>
)

export default MemebersModal

const PleaseSelectMessage = () => (
  <Message>Select someone from sidebar to show details.</Message>
)

// Styles
const Stack = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 230px 1fr;
`

const SidebarWrapper = styled.div`
  background: ${p => p.theme.grayLight1};
`

const DetailsWrapper = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: center;
`

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${p => p.theme.fontDefault16}px;

  background: ${p => p.theme.grayLight2};
  color: ${p => p.theme.grayDark2};
`
