import styled, { css } from 'styled-components'

// Local
import { Container } from '../shared/Container'
import Select from '../shared/Select'

const SubNav = ({ settingNav = false, ...props }) => (
  <Wrapper>
    <FlexContainer settingNav={settingNav}>
      {!settingNav ? (
        <Select />
      ) : (
        <SettingNav>
          <Item href="/">Settings</Item>
          <Item href="/">Members</Item>
          <Item href="/">Billing</Item>
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

  color: #97a5aa;
`
