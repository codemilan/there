// @flow
import React, { Component } from 'react'
import styled, { css } from 'styled-components'

// Local
import MemberPhoto from '../Person/MemberPhoto'
import { PrimaryButton } from '../../shared/Buttons/index'
import Clock from '../../shared/vectors/Clock'
import Working from '../../shared/vectors/Working'
import Sleeping from '../../shared/vectors/Sleeping'

type Props = {}

export default class MemberDetails extends Component<Props> {
  render() {
    return (
      <Wrapper>
        <DetailsGrid>
          <Cell>
            <MemberPhoto
              clickable={false}
              size="large"
              photoSrcSet={['/static/profiles/Alex.jpg']}
              status="working"
              onClick={() => this.onClickMember()}
            />
          </Cell>
          <Cell centerV>
            <div>
              <DisplayName>Alex Muench</DisplayName>
              <Status>(Focus Mode!)</Status>
              <LocationDetails>
                <span role="img" aria-label="Sparkles">
                  🇩🇪
                </span>{' '}
                Bavaria, Germany
              </LocationDetails>
            </div>
          </Cell>
          {/* TODO: make dynamic clock*/}
          <Cell>
            <Clock />
          </Cell>
          <Cell centerV>
            <div>
              <Time>
                9:30 <small>AM</small>
              </Time>
              <TimeAnalytics>2 hours behind you!</TimeAnalytics>
            </div>
          </Cell>

          <Cell />
          <Cell>
            <ScheduleItem>
              <Working />{' '}
              <ScheduleText>
                Starts working <BlackText>in 1.5 hrs</BlackText>
              </ScheduleText>
            </ScheduleItem>
            <ScheduleItem>
              <Sleeping />{' '}
              <ScheduleText>
                Goes to sleep <BlackText>in 9 hrs</BlackText>
              </ScheduleText>
            </ScheduleItem>
          </Cell>

          <Cell>
            <CellTitle>Groups</CellTitle>
          </Cell>
          <Cell>
            <GroupTag>Product Design</GroupTag>
          </Cell>

          <Cell>
            <CellTitle>Meeting</CellTitle>
          </Cell>
          <Cell>
            <PrimaryButton>Schedule</PrimaryButton>
          </Cell>
        </DetailsGrid>
      </Wrapper>
    )
  }
  onClickMember = () => {}
}

const Wrapper = styled.div`
  max-width: 400px;
`

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
`

const Cell = styled.div`
  padding: 10px 0;

  &:nth-child(2n + 1) {
    display: flex;
    justify-content: flex-end;
  }

  &:nth-child(2n) {
    margin-left: 20px;
  }

  ${p =>
    p.centerV &&
    css`
      display: flex;
      align-items: center;
    `};
`

const DisplayName = styled.div`
  display: inline-block;
  padding-right: 5px;

  line-height: 20px;
  font-size: 21px;
  letter-spacing: 0.01em;
  color: black;
`

const Status = styled.div`
  display: inline-block;

  line-height: 20px;
  font-size: 12px;
  color: #05fb4a;
`

const LocationDetails = styled.div`
  line-height: 20px;
  font-size: 15px;
  font-weight: 200;
  color: #808b94;
`

const Time = styled.div`
  line-height: 20px;
  font-size: 21px;
  letter-spacing: 0.02em;

  color: black;

  small {
    font-size: 12px;
  }
`

const TimeAnalytics = styled.div`
  line-height: 20px;
  font-size: 15px;
  letter-spacing: 0.02em;
  font-weight: 300;

  color: #808b94;
`

const ScheduleItem = styled.div`
  margin-bottom: 11px;
  display: flex;
  align-items: center;
  font-weight: 300;
`
const ScheduleText = styled.span`
  margin-left: 8px;
  line-height: 20px;
  font-size: 15px;
  letter-spacing: 0.02em;

  color: #808b94;
`

const CellTitle = styled.div`
  font-weight: 300;
  font-size: 14px;
  text-align: right;
  letter-spacing: 0.03em;

  color: #808b94;
`

const BlackText = styled.span`
  color: #4e555b;
`

const GroupTag = styled.div`
  display: inline-block;
  padding: 0 5px;
  border-radius: 3px;

  line-height: 20px;
  font-size: 12px;
  letter-spacing: 0.03em;

  background: #ecf1f3;
  color: #4e555b;
`
