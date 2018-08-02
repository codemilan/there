// @flow
import * as React from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'

// Local
import { Container } from '../../components/shared/Container'
import Nav from '../../components/App/Nav'
import AccountSubNav from '../../components/App/Nav/AccountSubNav'
import { Space } from '../../components/shared/Space'
import { Label } from '../../components/shared/Form/Label'
import { Input } from '../../components/shared/Input'
import { HugeLabel } from '../../components/shared/Form/HugeLabel'
import ImageUploader from '../../components/shared/Form/ImageUploader'
import { Line } from '../../components/shared/Form/Line'
import Error from '../../components/shared/Form/Error'
import { InlineButton } from '../../components/shared/Buttons/InlineButton'
import {
  PrimaryButton,
  SecondaryButton,
} from '../../components/shared/Buttons/index'

type State = {
  domains: Set<string>,
}

export default class Account extends React.Component<{}, State> {
  state = {
    domains: (new Set(): Set<string>),
  }

  render = () => (
    <>
      <Nav clock={true} navBorder={true} />
      <AccountSubNav />
      <Space height={50} />

      <ContainerFlex>
        <CountainerTeam>
          <Formik
            initialValues={{
              name: '',
              domain: '',
            }}
            validate={values => {
              // same as above, but feel free to move this into a class method now.
              let errors = {}
              if (!values.name) {
                errors.name = 'Error message'
              }
              if (!values.domain) {
                errors.domain = 'Error message'
              }
              return errors
            }}
            onSubmit={(
              values,
              { setSubmitting, setErrors /* setValues and other goodies */ },
            ) => {
              // do whatevs...
            }}
            render={({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <HugeLabel>Photo</HugeLabel>
                <ImageUploader src="/static/thereTeam.png" avatar />
                <SecondaryButton>Upload Photo</SecondaryButton>
                <Line />

                <HugeLabel>Personal Info</HugeLabel>
                <Space height={10} />
                <Label>
                  EMAIL
                  <EmailText>
                    <StyledEmail>mo.rajbi@gmail.com</StyledEmail>
                    <InlineButton>Change email</InlineButton>
                  </EmailText>
                </Label>
                {touched.email && errors.email && <Error>{errors.email}</Error>}

                <Label>
                  Given Name
                  <Input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    valid={touched.name && !errors.name}
                    fullWidth
                  />
                </Label>
                {touched.name && errors.name && <Error>{errors.name}</Error>}

                <Label>
                  Family Name
                  <Input
                    type="text"
                    name="familyName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.familyName}
                    valid={touched.familyName && !errors.familyName}
                    fullWidth
                  />
                </Label>
                {touched.familyName &&
                  errors.familyName && <Error>{errors.familyName}</Error>}
                <Line />

                <ButtonsWrapper>
                  <PrimaryButton type="submit" disabled={isSubmitting} blue>
                    Update
                  </PrimaryButton>
                  <SecondaryButton>Cancel</SecondaryButton>
                </ButtonsWrapper>

                {touched.password &&
                  errors.password && <div>{errors.password}</div>}
              </form>
            )}
          />
        </CountainerTeam>
      </ContainerFlex>
      <Space height={50} />
    </>
  )

  onDomainsChange = (domains: Set<string>) => {
    this.setState({ domains })
  }
}

// Styles
const ContainerFlex = styled(Container)`
  display: flex;
  justify-content: center;
`

const CountainerTeam = styled.div`
  width: 540px;
`

const ButtonsWrapper = styled.div`
  margin-top: 12px;
`

const EmailText = styled.div`
  margin-top: 10px;
`

const StyledEmail = styled.span`
  margin-right: 12px;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.04em;
  text-transform: lowercase;

  color: rgba(67, 83, 92, 0.92);
`
