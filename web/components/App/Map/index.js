// @flow
import React, { Component } from 'react'

// Utils
import { people } from './peopleList'

// Local
import { Wrapper, MapImage, MapOverlays, Point } from './styles'
import MemberPhoto from '../Person/MemberPhoto'
import PeopleGroup from '../Person/PeopleGroup'
import LayOutItems from './LayOutItems'

type Props = {
  onMemberSelect: (memberId: string) => void,
}

export default class Map extends Component<Props> {
  render() {
    return (
      <Wrapper>
        <MapImage
          srcSet={[
            '/static/team-map.png',
            '/static/team-map@2x.png',
            '/static/team-map@3x.png',
          ]}
        />

        <MapOverlays>
          <LayOutItems items={people}>
            {({ groups, sizeKey }) =>
              groups.map((group, groupIndex) => (
                <PeopleGroup
                  key={groupIndex}
                  point={group.point}
                  size={sizeKey}
                >
                  {group.items.map((item, itemIndex) => (
                    <MemberPhoto
                      clickable={true}
                      key={itemIndex}
                      size={sizeKey}
                      photoSrcSet={item.photoSrcSet}
                      status={item.status}
                      onClick={() => this.props.onMemberSelect(item.id)}
                    />
                  ))}
                </PeopleGroup>
              ))
            }
          </LayOutItems>
        </MapOverlays>
      </Wrapper>
    )
  }
}
