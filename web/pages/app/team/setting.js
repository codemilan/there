// @flow
import * as React from 'react'

// Local
import { Space } from '../../../components/shared/Space'
import Nav from '../../../components/App/Nav'
import SubNav from '../../../components/App/SubNav'

type State = {}

export default class setting extends React.Component<{}, State> {
  state = {}
  render = () => (
    <>
      <Nav clock={true} navBorder={true} />
      <SubNav settingNav={true} />
      <Space height={20} />
    </>
  )
}
