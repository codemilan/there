import styled, { css } from 'styled-components'

// Local
import { Link } from '../shared/Link'
import { Container } from '../shared/Container'
import Select from '../shared/Select'

const SubNav = ({ settingNav = false, ...props }) => (
  <Wrapper>
    <FlexContainer settingNav={settingNav}>
      {!settingNav ? (
        <Select />
      ) : (
        <SettingNav>
          <Link href="/app/team/setting" passHref passActive>
            <Item>Settings</Item>
          </Link>
          <Link href="/app/team/members" passHref passActive>
            <Item>Members</Item>
          </Link>
          <Link href="/app/team/billing" passHref passActive>
            <Item>Billing</Item>
          </Link>
        </SettingNav>
      )}
    </FlexContainer>
  </Wrapper>
)

export default SubNav

// Styles
const Wrapper = styled.nav`
  padding: 4px 0;
`

const FlexContainer = styled(Container)`
  ${p =>
    p.settingNav &&
    css`
      display: flex;
      justify-content: flex-end;
    `};
`

const SettingNav = styled.div`
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
