import styled from 'styled-components'

// Local
import { Link } from '../../shared/Link'
import { Container } from '../../shared/Container'
import LogoVector from '../../../vectors/Logo'
import Account from './Account'

const Nav = () => (
  <Wrapper>
    <Container>
      <Grid>
        <Left>
          <Logo>
            <LogoVector />
          </Logo>

          <Items>
            <Link href="/app" passHref passActive>
              <LinkItem>Team</LinkItem>
            </Link>
            <Link href="/app/schedule" passHref passActive>
              <LinkItem>Schedule</LinkItem>
            </Link>
          </Items>
        </Left>

        <Center>
          <Status>21:30</Status>
        </Center>

        <Right>
          <Account />
        </Right>
      </Grid>
    </Container>
  </Wrapper>
)

export default Nav

// Variables
const height = 78

// Styles
const Wrapper = styled.nav`
  height: ${height}px;
  background-image: linear-gradient(
    180deg,
    rgba(116, 197, 255, 0.06) 0%,
    rgba(255, 255, 255, 0) 34.18%
  );
`

const Grid = styled.div`
  height: ${height}px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
`

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Logo = styled.div`
  margin-right: 18px;
`

const Status = styled.div``

const Items = styled.div``

const LinkItem = styled.a`
  padding: 2px 10px;
  margin-right: 8px;

  line-height: 1;
  font-family: 'Poppins';
  font-size: 16px;
  text-decoration: none;

  color: ${p => (p.active ? 'black' : p.theme.grayDark1)};
  transition: color 180ms ease;

  &:hover {
    color: black;
  }

  &:active {
    color: darkgray;
  }
`
