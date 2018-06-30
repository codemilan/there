import { Component } from 'react'

// Utils
import { CENTER } from './helpers'
import { people } from './peopleList'
import { cities } from './citiesList'

// Local
import { Wrapper, MapImage, MapOverlays, Point } from './styles'
import PhotoOnMap from '../Person/PhotoOnMap'
import PeopleGroup from '../Person/PeopleGroup'
import LayOutItems from './LayOutItems'

export default class Map extends Component {
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
          {Object.values(cities).map((point, i) => (
            <PointFromCenter {...point} key={i} />
          ))}

          <LayOutItems items={people}>
            {({ groups, sizeKey }) =>
              groups.map((group, groupIndex) => (
                <PeopleGroup
                  key={groupIndex}
                  point={group.point}
                  size={sizeKey}
                >
                  {group.items.map((item, itemIndex) => (
                    <PhotoOnMap
                      key={itemIndex}
                      size={sizeKey}
                      photoSrcSet={item.photoSrcSet}
                      status={item.status}
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

const PointFromCenter = ({ x, y, ...props }) => (
  <Point x={CENTER.x + x} y={CENTER.y - y} {...props} />
)
