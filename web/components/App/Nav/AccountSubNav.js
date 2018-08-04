// @flow
import React from 'react'
import styled from 'styled-components'

// Local
import { Link } from '../../shared/Link'
import SubNav from '../SubNav'

const AccountSubNav = () => (
  <SubNav flexAlign="flex-end">
    <TeamNav>
      <Link href="/app/account" passHref passActive>
        <Item>My Account</Item>
      </Link>
      <Link href="/app/notifications" passHref passActive>
        <Item>Notifications</Item>
      </Link>
    </TeamNav>
  </SubNav>
)

export default AccountSubNav

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
