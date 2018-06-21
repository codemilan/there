import NextLink from 'next/link'
import React, { PureComponent } from 'react'
import { withRouter } from 'next/router'
import { any, node, bool, string } from 'prop-types'

class LinkWithoutRouter extends PureComponent {
  static propTypes = {
    router: any,
    children: node,
    passActive: bool,
    passHref: bool,
    href: string,
  }

  render() {
    const {
      children: childrenFromProps,
      passActive,
      href,
      ...props
    } = this.props

    // Filter
    delete props.router

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
    this.props.router.pathname.includes(`${href}/`)
}

export const Link = withRouter(LinkWithoutRouter)
