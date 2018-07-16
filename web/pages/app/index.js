// @flow
import * as React from 'react'

// Local
import { Space } from '../../components/shared/Space'
import Nav from '../../components/App/Nav'
import Map from '../../components/App/Map'
import SubNav from '../../components/App/SubNav'
import MembersModal from '../../components/App/MembersModal'

type State = {
  selectedMemberId: string | null,
}

export default class App extends React.Component<{}, State> {
  state = { selectedMemberId: 'xxx' }

  render() {
    const { selectedMemberId } = this.state

    return (
      <>
        <Nav />
        <SubNav />
        <Space height={20} />
        <Map onMemberSelect={this.memberSelected} />
        <MembersModal
          isOpen={Boolean(selectedMemberId)}
          selectedMemberId={selectedMemberId}
          onMemberSelect={this.memberSelected}
          onClose={this.modalClosed}
        />
      </>
    )
  }

  memberSelected = (memberId: string) => {
    this.setState({ selectedMemberId: memberId })
  }

  modalClosed = () => {
    this.setState({ selectedMemberId: null })
  }
}
