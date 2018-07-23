// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

// Local
import SearchBar from './SearchBar'
import MemberPhoto from '../Person/MemberPhoto'

type Props = {}

type State = {
  inputValue: string,
}

export default class Sidebar extends Component<Props, State> {
  state = {
    inputValue: '',
  }
  render() {
    return (
      <>
        <SearchBar
          value={this.state.inputValue}
          onChange={e => this.setState({ inputValue: e.target.value })}
          placeholder="Find..."
        />
        <MemberGroup>
          <MembersTitle>Product Design</MembersTitle>
          <MembersList>
            <MemberItem>
              <MemberPhoto
                size="small"
                photoSrcSet={['/static/profiles/Alex.jpg']}
                status="working"
                onClick={() => this.onClickMember()}
              />
              <div>
                <MemberDisplayName>Alex Muench</MemberDisplayName>
                <MemberStatus>
                  <span role="img" aria-label="Sparkles">
                    ✨
                  </span>{' '}
                  Evening
                </MemberStatus>
              </div>
            </MemberItem>
            <MemberItem>
              <MemberPhoto
                size="small"
                photoSrcSet={['/static/profiles/Alex.jpg']}
                status="working"
                onClick={() => this.onClickMember()}
              />
              <div>
                <MemberDisplayName>Alex Muench</MemberDisplayName>
                <MemberStatus>✨ Evening</MemberStatus>
              </div>
            </MemberItem>
          </MembersList>
        </MemberGroup>
        <MemberGroup>
          <MembersTitle> All Members</MembersTitle>
          <MembersList>
            <MemberItem>
              <MemberPhoto
                size="small"
                photoSrcSet={['/static/profiles/Alex.jpg']}
                status="working"
                onClick={() => this.onClickMember()}
              />
              <div>
                <MemberDisplayName>Alex Muench</MemberDisplayName>
                <MemberStatus>
                  <span role="img" aria-label="Sparkles">
                    ✨
                  </span>{' '}
                  Evening
                </MemberStatus>
              </div>
            </MemberItem>
            <MemberItem>
              <MemberPhoto
                size="small"
                photoSrcSet={['/static/profiles/Alex.jpg']}
                status="working"
                onClick={() => this.onClickMember()}
              />
              <div>
                <MemberDisplayName>Alex Muench</MemberDisplayName>
                <MemberStatus>✨ Evening</MemberStatus>
              </div>
            </MemberItem>
          </MembersList>
        </MemberGroup>
      </>
    )
  }
  onClickMember = () => {
    console.log('test')
  }
}

// Veriables
const leftGap = 15

// Styles
const MemberGroup = styled.div`
  min-height: 100px;
  margin-top: 12px;

  font-family: ${p => p.theme.fontSystem};
`

const MembersTitle = styled.div`
  padding: 6px ${leftGap}px;
  font-weight: 400;
  font-size: 11.5px;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: #97a5aa;
`

const MembersList = styled.div``

const MemberDisplayName = styled.div`
  line-height: 20px;
  font-size: 15px;
  letter-spacing: 0.01em;

  color: #000000;
`

const MemberStatus = styled.div`
  line-height: 12px;
  font-size: 12px;
  letter-spacing: 0.01em;

  color: #828282;
`

const MemberItem = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;

  padding: 6px ${leftGap}px;
  cursor: pointer;

  &:hover {
    background: #0897ff;

    ${MemberDisplayName} {
      color: #fff;
    }

    ${MemberStatus} {
      color: #fff;
    }
  }
`
