// @flow
import NextLink from 'next/link'
import * as React from 'react'
import { withRouter } from 'next/router'

type Props = {
  router: { pathname: string },
  children: any,
  exact?: boolean,
  passActive?: boolean,
  passHref?: boolean,
  href: string,
}

class LinkWithoutRouter extends React.PureComponent<Props> {
  render() {
    const {
      children: childrenFromProps,
      passActive,
      href,
      ...props
    } = this.props

    // Filter
    delete props.router
    delete props.exact

    // We want to pass props to children
    let children = childrenFromProps

    if (passActive) {
      // If we're on the page, pass active prop to children
      children = React.cloneElement(
        childrenFromProps,
        this.isActive(href)
          ? {
              active: true,
            }
          : {},
      )
    }

    return (
      <NextLink {...props} href={href}>
        {children}
      </NextLink>
    )
  }

  isActive = href =>
    this.props.router.pathname === href ||
    (!this.props.exact && this.props.router.pathname.includes(`${href}/`))
}

export const Link = withRouter(LinkWithoutRouter)
