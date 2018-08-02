// @flow
import * as React from 'react'
import styled from 'styled-components'
import * as clipboardCopy from 'clipboard-copy'

// Local
import { NarrowContainer } from '../../../components/shared/Container'
import Nav from '../../../components/App/Nav'
import TeamSubNav from '../../../components/App/Nav/TeamSubNav'
import { Space } from '../../../components/shared/Space'
import { HugeLabel } from '../../../components/shared/Form/HugeLabel'
import Hint from '../../../components/shared/Form/Hint'
import { PrimaryButton, InlineButton } from '../../../components/shared/Buttons'
import Row from '../../../components/App/TeamMembers/Row'

type State = {}

export default class Members extends React.Component<{}, State> {
  state = {}

  render = () => (
    <>
      <Nav clock={true} navBorder={true} />
      <TeamSubNav />

      <Space height={50} />
      <NarrowContainer>
        <HugeLabel>Members (3)</HugeLabel>
        <Hint>
          Or simply share the link{' '}
          <InlineButton onClick={this.linkClicked}>
            www.there.pm/there
          </InlineButton>{' '}
          to people with an allowed email domain, and they can join the
          workspace automatically.
        </Hint>
        <Space height={20} />
        <PrimaryButton>Add new member</PrimaryButton>
        <Space height={64} />
        <MembersList>
          <thead>
            <tr>
              <th width="80%">User</th>
              <th>Access Level</th>
            </tr>
          </thead>
          <tbody>
            <Row
              photoSrcSet="/static/profiles/Alex.jpg"
              name="Mohammad Rajabifard"
              email="mo.rajbi@gmail.com"
              permission="Admin"
              onRoleChange={this.roleChanged}
            />
            <Row
              photoSrcSet="/static/profiles/Phil.jpg"
              name="Phil Plückthun"
              email="phil@kitten.sh"
              permission="Member"
              onRoleChange={this.roleChanged}
            />
            <Row
              photoSrcSet="/static/profiles/Luke.jpg"
              name="Behnam Rajabifard"
              email="b.rajabifard@gmail.com"
              permission="Member"
              onRoleChange={this.roleChanged}
            />
          </tbody>
        </MembersList>
      </NarrowContainer>
    </>
  )

  linkClicked = (e: any) => {
    clipboardCopy(e.target.innerHTML)
  }

  roleChanged = (role: string) => {
    //so sth about new role
  }
}

// Styles
const MembersList = styled.table`
  width: 100%;

  th {
    text-align: left;
    line-height: normal;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.02em;

    color: ${p => p.theme.grayDark2};
  }

  th,
  td {
    padding: 9px 0;
    border-bottom: 1px solid #ecf1f3;
  }
`
