import styled from 'styled-components'

// Local
import { LinkItem, sidePaddingSmaller } from '../../../shared/DropdownMenu'

const AccountItem = ({ email, name, photoUrl, href }) => (
  <Wrapper href={href}>
    <Photo src={photoUrl} />
    <Texts>
      <Name>{name}</Name>
      <Description>{email}</Description>
    </Texts>
  </Wrapper>
)

export default AccountItem

// Variables
const height = 50
const photoSize = 34

// Styles
const Wrapper = styled(LinkItem)`
  display: flex;
  align-items: center;

  height: ${height}px;
  padding-left: ${sidePaddingSmaller}px;
`

const Photo = styled.img`
  flex-basis: ${photoSize}px;
  width: ${photoSize}px;
  height: ${photoSize}px;

  border-radius: ${p => p.theme.radius}px;
`

const Texts = styled.div`
  flex-grow: 1;
  margin-left: 12px;
  white-space: nowrap;
`

const Name = styled.div`
  line-height: 1;
  font-size: ${p => p.theme.fontMedium15}px;
  color: ${p => p.theme.grayDark3};
`

const Description = styled.div`
  margin-top: 1px;

  line-height: 1;
  font-family: ${p => p.theme.fontSystem};
  font-size: ${p => p.theme.fontSmall13}px;
  color: ${p => p.theme.grayDark2};
`
