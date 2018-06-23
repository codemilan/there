import { Component } from 'react'
import proj4 from 'proj4'

// Local
import { Wrapper, MapImage, Point } from './styles'
import PhotoOnMap from '../Person/PhotoOnMap'

// Do not change!
const Y_RATIO = 31991.42245737569
const X_RATIO = 34069.16874401973
const CENTER = { x: 554, y: 375 }

proj4.defs(
  'MILL',
  `PROJCS["World_Miller_Cylindrical", GEOGCS["GCS_WGS_1984", DATUM["WGS_1984", SPHEROID["WGS_1984",6378137,298.257223563]], PRIMEM["Greenwich",0], UNIT["Degree",0.017453292519943295]], PROJECTION["Miller_Cylindrical"], PARAMETER["False_Easting",0], PARAMETER["False_Northing",0], PARAMETER["Central_Meridian",0], UNIT["Meter",1], AUTHORITY["EPSG","54003"]]`,
)

export default class Map extends Component {
  render() {
    const sfCoordinates = proj4('MILL', { y: 37.77493, x: -122.41942 })
    const shanghaiCoordinates = proj4('MILL', { y: 31.22222, x: 121.45806 })
    const dezfulCoordinates = proj4('MILL', { y: 32.38114, x: 48.40581 })
    const capetownCoordinates = proj4('MILL', { y: -33.9248685, x: 18.4240553 })
    const londonCoordinates = proj4('MILL', { y: 51.50853, x: -0.12574 })
    const sydneyCoordinates = proj4('MILL', { y: -33.86785, x: 151.20732 })
    const icelandCoordinates = proj4('MILL', { y: 64.13548, x: -21.89541 })
    const helsinkiCoordinates = proj4('MILL', { y: 60.16952, x: 24.93545 })
    const tallinnCoordinates = proj4('MILL', { y: 59.436962, x: 24.753574 })

    const cities = [
      {
        x: sfCoordinates.x / X_RATIO,
        y: sfCoordinates.y / Y_RATIO,
      },

      {
        x: shanghaiCoordinates.x / X_RATIO,
        y: shanghaiCoordinates.y / Y_RATIO,
      },

      {
        x: dezfulCoordinates.x / X_RATIO,
        y: dezfulCoordinates.y / Y_RATIO,
      },

      {
        x: capetownCoordinates.x / X_RATIO,
        y: capetownCoordinates.y / Y_RATIO,
      },

      {
        x: londonCoordinates.x / X_RATIO,
        y: londonCoordinates.y / Y_RATIO,
      },

      {
        x: sydneyCoordinates.x / X_RATIO,
        y: sydneyCoordinates.y / Y_RATIO,
      },

      {
        x: icelandCoordinates.x / X_RATIO,
        y: icelandCoordinates.y / Y_RATIO,
      },

      {
        x: helsinkiCoordinates.x / X_RATIO,
        y: helsinkiCoordinates.y / Y_RATIO,
      },

      {
        x: tallinnCoordinates.x / X_RATIO,
        y: tallinnCoordinates.y / Y_RATIO,
      },
    ]

    return (
      <Wrapper>
        <MapImage
          srcSet={[
            '/static/team-map.png',
            '/static/team-map@2x.png',
            '/static/team-map@3x.png',
          ]}
        />

        <PhotoOnMap />

        {cities.map((point, i) => <PointFromCenter {...point} key={i} />)}
      </Wrapper>
    )
  }
}

const PointFromCenter = ({ x, y, ...props }) => (
  <Point x={CENTER.x + x} y={CENTER.y - y} {...props} />
)
