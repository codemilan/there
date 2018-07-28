// @flow
import * as React from 'react'
import styled from 'styled-components'

// Local
import { Container } from '../../../components/shared/Container'
import { Space } from '../../../components/shared/Space'
import { Label } from '../../../components/shared/Form/Label'
import { Input } from '../../../components/shared/Input'
import ImageUploader from '../../../components/shared/Form/ImageUploader'
import Line from '../../../components/shared/Form/Line'
import Hint from '../../../components/shared/Form/Hint'
import Nav from '../../../components/App/Nav'
import SubNav from '../../../components/App/SubNav'

type State = {}

export default class setting extends React.Component<{}, State> {
  state = {}
  render = () => (
    <>
      <Nav clock={true} navBorder={true} />
      <SubNav settingNav={true} />
      <Space height={50} />
      <ContainerFlex>
        <CountainerTeam>
          <Label>Name</Label>
          <Input placeholder="There" fullWidth={true} />
          <Hint>
            Upload an image. It will show up in your navbar and notifications.
          </Hint>
          <Line />

          <Label>Icon</Label>
          <ImageUploader src="/static/thereTeam.png" />
          <Line />

          <Label>Domain</Label>
          <Input placeholder="There" fullWidth={true} preText="www.there.pm/" />
          <Hint>
            Share the link www.there.pm/there to add anyone with an allowed
            email domain to your team home.
          </Hint>
          <Line />

          <Label>Allowed Email Domains</Label>

          <Input placeholder="" fullWidth={true} />
          <Hint>
            Anyone with email addresses at these domains can automatically join
            your team.
          </Hint>
        </CountainerTeam>
      </ContainerFlex>
    </>
  )
}

const ContainerFlex = styled(Container)`
  display: flex;
  justify-content: center;
`

const CountainerTeam = styled.div`
  width: 540px;
`
