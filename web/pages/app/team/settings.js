// @flow
import * as React from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'

// Local
import { NarrowContainer } from '../../../components/shared/Container'
import Nav from '../../../components/App/Nav'
import SubNav from '../../../components/App/SubNav'
import TeamSubNav from '../../../components/App/Nav/TeamSubNav'
import { Space } from '../../../components/shared/Space'
import { HugeLabel } from '../../../components/shared/Form/HugeLabel'
import { Input } from '../../../components/shared/Input'
import MultipleInput from '../../../components/shared/MultipleInput'
import ImageUploader from '../../../components/shared/Form/ImageUploader'
import { Line } from '../../../components/shared/Form/Line'
import Error from '../../../components/shared/Form/Error'
import Hint from '../../../components/shared/Form/Hint'
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../components/shared/Buttons/index'

type State = {
  domains: Set<string>,
}

export default class setting extends React.Component<{}, State> {
  state = {
    domains: (new Set(): Set<string>),
  }

  render = () => (
    <>
      <Nav clock={true} navBorder={true} />
      <SubNav>
        <TeamSubNav />
      </SubNav>
      <Space height={50} />

      <NarrowContainer>
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
              <HugeLabel>Name</HugeLabel>
              <Input
                placeholder="There"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                valid={touched.name && !errors.name}
                fullWidth
              />

              {touched.name && errors.name ? (
                <Error>{errors.name}</Error>
              ) : (
                <Hint>
                  Upload an image. It will show up in your navbar and
                  notifications
                </Hint>
              )}

              <Line />

              <HugeLabel>Icon</HugeLabel>
              <ImageUploader src="/static/thereTeam.png" />
              <SecondaryButton>Upload Team Icon</SecondaryButton>
              <Line />

              <HugeLabel>Domain</HugeLabel>
              <DomainWrapper>
                <Pre>www.there.pm/</Pre>
                <Input
                  placeholder=""
                  type="text"
                  name="domain"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.domain}
                  valid={touched.domain && !errors.domain}
                  fullWidth
                />
              </DomainWrapper>
              {touched.domain && errors.domain ? (
                <Error>{errors.name}</Error>
              ) : (
                <Hint>
                  Share the link www.there.pm/{!values.domain
                    ? 'YourDomain'
                    : values.domain}{' '}
                  to add anyone with an allowed email domains to your team home.
                </Hint>
              )}

              <Line />

              <HugeLabel>Allowed Email domainss</HugeLabel>

              <MultipleInput
                selections={this.state.domains}
                onChange={this.onDomainsChange}
                placeholder=""
              />
              <Hint>
                Anyone with email addresses at these domainss can automatically
                join your team.
              </Hint>
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
      </NarrowContainer>
      <Space height={50} />
    </>
  )

  onDomainsChange = (domains: Set<string>) => {
    this.setState({ domains })
  }
}

// Styles
const DomainWrapper = styled.div`
  display: flex;
  min-height: 34px;
  line-height: 34px;
`

const Pre = styled.div`
  margin-right: 8px;
  font-size: ${p => p.theme.fontDefault16}px;
  letter-spacing: 0.04em;

  color: rgba(67, 83, 92, 0.92);
`

const ButtonsWrapper = styled.div`
  margin-top: 12px;
`
