// @flow
import * as React from 'react'
import styled from 'styled-components'

// Local
import { NarrowContainer } from '../../../components/shared/Container'
import Nav from '../../../components/App/Nav'
import TeamSubNav from '../../../components/App/Nav/TeamSubNav'
import { Space } from '../../../components/shared/Space'
import { HugeLabel } from '../../../components/shared/Form/HugeLabel'
import { Line } from '../../../components/shared/Form/Line'
import Hint from '../../../components/shared/Form/Hint'
import { InlineButton } from '../../../components/shared/Buttons/index'
type State = {}

export default class Bills extends React.Component<{}, State> {
  state = {}

  render = () => (
    <>
      <Nav clock={true} navBorder={true} />
      <TeamSubNav />
      <Space height={50} />
      <NarrowContainer>
        <HugeLabel>Team Plan</HugeLabel>
        <StyledLine />
        <Plans>
          <Plan>
            <Title>Free</Title>
            <Price>€ 0</Price>
            <PlanDetails>1 Team (1 members)</PlanDetails>
          </Plan>
          <Plan>
            <Title>Company</Title>
            <Price>€ 3 per user</Price>
            <PlanDetails>1 Team (3 members)</PlanDetails>
          </Plan>
        </Plans>
        <Hint>
          Your Team plan is set to $0 per month and will renew on July 10th
          2018. Adjusted for your account balance, you will be charged $0. (View
          Upcoming Invoice)
        </Hint>

        <BillingSettings>
          <BillingRow>
            <TitleRow>Billing Interval</TitleRow>
            <EndRow>
              <EndRowOption>Monthly</EndRowOption>
              <InlineButton>update</InlineButton>
            </EndRow>
          </BillingRow>
          <BillingRow>
            <TitleRow>Billing Email</TitleRow>
            <EndRow>
              <EndRowOption>None</EndRowOption>
              <InlineButton>update</InlineButton>
            </EndRow>
          </BillingRow>
        </BillingSettings>

        <Space height={50} />
        <HugeLabel>Billing History</HugeLabel>
        <StyledLine />
      </NarrowContainer>
    </>
  )
}

// Styles
const StyledLine = styled(Line)`
  margin-top: 12px;
`

const Plans = styled.div`
  width: 100%;
  display: flex;
`

const Plan = styled.div`
  width: 180px;
  padding: 10px;
  margin-right: 12px;
  margin-bottom: 10px;
  line-height: 25px;
  border: 1px solid ${p => p.theme.grayDark1};
  border-radius: 3px;
  text-align: center;
`

const Title = styled.div`
  font-size: ${p => p.theme.fontDefault16}px;
  font-weight: 400;
  letter-spacing: 0.02em;

  color: ${p => p.theme.grayDark3};
`
const Price = styled.div``
const PlanDetails = styled.div`
  font-size: ${p => p.theme.fontMedium14}px;
  font-weight: 300;
  letter-spacing: 0.02em;
  color: ${p => p.theme.grayDark2};
`

const BillingSettings = styled.div`
  width: 100%;
  margin-top: 36px;
`
const BillingRow = styled.div`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${p => p.theme.grayLight1};
  line-height: 1;
`
const TitleRow = styled.div`
  font-size: ${p => p.theme.fontMedium14}px;
  letter-spacing: 0.02em;

  color: #${p => p.theme.grayDark3};
`
const EndRow = styled.div`
  display: flex;
  justify-content: flex-end;

  font-size: ${p => p.theme.fontMedium14}px;
  font-weight: 300;
  letter-spacing: 0.02em;
  color: ${p => p.theme.grayDark2};
`

const EndRowOption = styled.div`
  margin-right: 21px;
`
