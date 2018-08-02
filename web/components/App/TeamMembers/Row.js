// @flow
import * as React from 'react'
import styled from 'styled-components'

// Local
import MemberPhoto from '../Person/MemberPhoto'
import { BasicSelect } from '../../shared/Select'

type Props = {
  photoSrcSet: string,
  name: string,
  email: string,
  permission: string,
  onRoleChange: any,
}

const Row = ({ photoSrcSet, name, email, permission, onRoleChange }: Props) => (
  <tr>
    <td>
      <MemberItem>
        <MemberPhoto
          clickable={false}
          size="small"
          photoSrcSet={[photoSrcSet]}
          status="working"
          onClick={() => {}}
          ring={false}
        />
        <div>
          <MemberDisplayName>{name}</MemberDisplayName>
          <Email>{email}</Email>
        </div>
      </MemberItem>
    </td>
    <td>
      <BasicSelect
        onChange={onRoleChange}
        defaultSelectedItem={permission}
        items={['Admin', 'Member']}
      />
    </td>
  </tr>
)

export default Row

// Styles
const MemberDisplayName = styled.div`
  line-height: 20px;
  font-size: 15px;
  letter-spacing: 0.01em;

  color: black;
`

const Email = styled.div`
  margin-top: 3px;
  font-size: 13px;
  letter-spacing: 0.02em;

  color: #97a5aa;
`

const MemberItem = styled.div`
  display: grid;
  grid-template-columns: 45px 1fr;
`
