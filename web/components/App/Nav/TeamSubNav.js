// @flow
import React from 'react'
import styled from 'styled-components'

// Local
import { Link } from '../../shared/Link'
import SubNav from '../SubNav'

const TeamSubNav = () => (
  <SubNav flexAlign="flex-end">
    <TeamNav>
      <Link href="/app/team/settings" passHref passActive>
        <Item>Settings</Item>
      </Link>
      <Link href="/app/team/members" passHref passActive>
        <Item>Members</Item>
      </Link>
      <Link href="/app/team/billing" passHref passActive>
        <Item>Billing</Item>
      </Link>
    </TeamNav>
  </SubNav>
)

export default TeamSubNav

const TeamNav = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
`

const Item = styled.a`
  padding-left: 25px;

  font-family: ${p => p.theme.fontTitle};
  font-size: 15px;
  text-decoration: none;

  color: ${p => (p.active ? 'black' : p.theme.grayDark2)};
`
