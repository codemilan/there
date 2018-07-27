import styled from 'styled-components'
import posed from 'react-pose'

// Local
import { Link } from '../../../shared/Link'
import * as Dropdown from '../../../shared/DropdownMenu'
import AccountItem from './AccountItem'

const AccountDropdown = ({ isOpen = false }) => (
  <PosedWrapper pose={isOpen ? 'open' : 'closed'}>
    <Dropdown.GroupTitle wide={true}>Settings</Dropdown.GroupTitle>

    <Link href="/account" passHref>
      <AccountItem
        name="Mohammad Rajabifard"
        email="guillermo.rauch@gmail.com"
        photoUrl="/static/profiles/Guillermo_Rauch.jpg"
      />
    </Link>

    <Link href="/app/team/setting" passHref>
      <AccountItem name="Zeit" photoUrl="/static/profiles/zeit.png" />
    </Link>

    <Dropdown.Separator />

    <Dropdown.ButtonItem>Logout</Dropdown.ButtonItem>
  </PosedWrapper>
)

export default AccountDropdown

// Styles
const Wrapper = styled(Dropdown.Wrapper).attrs({
  minWidth: 260,
})`
  position: absolute;
  right: 0;
  margin-top: 8px;
  border-top-right-radius: 0;

  /* Initial Pose */
  opacity: 0;
`

// Animations
const PosedWrapper = posed(Wrapper)({
  open: {
    y: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 120, ease: 'easeInOut' },
  },
  closed: {
    y: -15,
    opacity: 0,
    transition: { type: 'tween', duration: 70, ease: 'easeInOut' },
  },
  passive: {
    display: ['opacity', opacity => (opacity === 0 ? 'none' : 'block')],
  },
})
