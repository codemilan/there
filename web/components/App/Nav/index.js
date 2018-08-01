// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

// Local
import { Link } from '../../shared/Link'
import { Container } from '../../shared/Container'
import LogoVector from '../../shared/vectors/Logo'
import Account from './Account'
import PageTitle from './PageTitle'

type Props = {
  title?: string,
  blackLogo?: boolean,
  authenticated?: boolean,
}

export default class Nav extends Component<Props, { scrolled: boolean }> {
  state = {
    scrolled: false,
  }

  static defaultProps = {
    authenticated: true,
  }

  render() {
    const { title, authenticated, blackLogo } = this.props

    return (
      <Wrapper>
        <NavContainer border={this.state.scrolled}>
          <Grid>
            <Left>
              <Link href="/" passHref={true}>
                <Logo>
                  <LogoVector black={blackLogo} />
                </Logo>
              </Link>

              <Items>
                {authenticated && (
                  <>
                    <Link href="/app" passHref passActive>
                      <LinkItem>Team</LinkItem>
                    </Link>
                    <Link href="/app/schedule" passHref passActive>
                      <LinkItem>Schedule</LinkItem>
                    </Link>
                  </>
                )}
              </Items>
            </Left>

            <Center>{title && <PageTitle>{title}</PageTitle>}</Center>

            <Right>{authenticated && <Account />}</Right>
          </Grid>
        </NavContainer>
      </Wrapper>
    )
  }

  appRoot: ?Element =
    typeof window !== 'undefined' ? document.getElementById('app-root') : null

  componentDidMount() {
    this.appRoot && this.appRoot.addEventListener('scroll', this.scrolled, true)
  }

  componentWillUnmount() {
    this.appRoot &&
      this.appRoot.removeEventListener('scroll', this.scrolled, true)
  }

  scrolled = () => {
    if (!this.appRoot) {
      return
    }

    if (this.appRoot.scrollTop < 5 && this.state.scrolled === true) {
      this.setState({ scrolled: false })
    } else if (this.appRoot.scrollTop >= 5 && this.state.scrolled === false) {
      this.setState({ scrolled: true })
    }
  }
}

// Variables
const height = 60

// Styles
const Wrapper = styled.nav`
  height: ${height}px;

  background-color: white;
  background-image: linear-gradient(
    180deg,
    rgba(116, 197, 255, 0.06) 0%,
    rgba(255, 255, 255, 0) 34.18%
  );

  position: sticky;
  top: 0;
  z-index: ${p => p.theme.ZIndexNav};
`

const NavContainer = styled(Container)`
  border-bottom: 1px solid
    ${p => (p.border ? p.theme.grayLight1 : `transparent`)};
  transition: border 150ms ease;
`

const Grid = styled.div`
  height: ${height}px;
  padding-top: 4px;

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

const Logo = styled.a`
  margin-right: 18px;
`

const Items = styled.div``

const LinkItem = styled.a`
  padding: 2px 10px;
  margin-right: 8px;

  line-height: 1;
  font-family: 'Poppins';
  font-size: 16px;
  text-decoration: none;

  color: ${p => (p.active ? 'black' : p.theme.grayDark2)};
  transition: color 180ms ease;

  &:hover {
    color: black;
  }

  &:active {
    color: darkgray;
  }
`
