import proj4 from 'proj4'

// Util
import { X_RATIO, Y_RATIO } from './helpers'

proj4.defs(
  'MILL',
  `PROJCS["World_Miller_Cylindrical", GEOGCS["GCS_WGS_1984", DATUM["WGS_1984", SPHEROID["WGS_1984",6378137,298.257223563]], PRIMEM["Greenwich",0], UNIT["Degree",0.017453292519943295]], PROJECTION["Miller_Cylindrical"], PARAMETER["False_Easting",0], PARAMETER["False_Northing",0], PARAMETER["Central_Meridian",0], UNIT["Meter",1], AUTHORITY["EPSG","54003"]]`,
)

const sfCoordinates = proj4('MILL', { y: 37.77493, x: -122.41942 })
const shanghaiCoordinates = proj4('MILL', { y: 31.22222, x: 121.45806 })
const dezfulCoordinates = proj4('MILL', { y: 32.38114, x: 48.40581 })
const capetownCoordinates = proj4('MILL', { y: -33.9248685, x: 18.4240553 })
const londonCoordinates = proj4('MILL', { y: 51.50853, x: -0.12574 })
const sydneyCoordinates = proj4('MILL', { y: -33.86785, x: 151.20732 })
const icelandCoordinates = proj4('MILL', { y: 64.13548, x: -21.89541 })
const helsinkiCoordinates = proj4('MILL', { y: 60.16952, x: 24.93545 })
const tallinnCoordinates = proj4('MILL', { y: 59.436962, x: 24.753574 })
const parisCoordinates = proj4('MILL', { y: 48.856614, x: 2.3522219 })
const hanoverCoordinates = proj4('MILL', { y: 52.3758916, x: 9.7320104 })
const berlinCoordinates = proj4('MILL', { y: 52.5200066, x: 13.404954 })
const calcuttaCoordinates = proj4('MILL', { y: 22.572646, x: 88.363895 })
const bengaluruCoordinates = proj4('MILL', { y: 12.972442, x: 77.5964355 })
const washingtonCoordinates = proj4('MILL', {
  y: 38.9071923,
  x: -77.0368707,
})
const montrealCoordinates = proj4('MILL', {
  y: 45.5016889,
  x: -73.567256,
})
const rioDeJaneiroCoordinates = proj4('MILL', {
  y: -22.9068467,
  x: -43.1728965,
})
const sriLankaCoordinates = proj4('MILL', {
  y: 7.873054,
  x: 80.771797,
})
const buenosAiresCoordinates = proj4('MILL', {
  y: -34.6036844,
  x: -58.3815591,
})
const tokyoCoordinates = proj4('MILL', {
  y: 35.6894875,
  x: 139.6917064,
})

export const cities = {
  sf: {
    x: sfCoordinates.x / X_RATIO,
    y: sfCoordinates.y / Y_RATIO,
  },

  shanghai: {
    x: shanghaiCoordinates.x / X_RATIO,
    y: shanghaiCoordinates.y / Y_RATIO,
  },

  dezful: {
    x: dezfulCoordinates.x / X_RATIO,
    y: dezfulCoordinates.y / Y_RATIO,
  },

  capeTown: {
    x: capetownCoordinates.x / X_RATIO,
    y: capetownCoordinates.y / Y_RATIO,
  },

  london: {
    x: londonCoordinates.x / X_RATIO,
    y: londonCoordinates.y / Y_RATIO,
  },

  sydney: {
    x: sydneyCoordinates.x / X_RATIO,
    y: sydneyCoordinates.y / Y_RATIO,
  },

  iceland: {
    x: icelandCoordinates.x / X_RATIO,
    y: icelandCoordinates.y / Y_RATIO,
  },

  helsinki: {
    x: helsinkiCoordinates.x / X_RATIO,
    y: helsinkiCoordinates.y / Y_RATIO,
  },

  tallinn: {
    x: tallinnCoordinates.x / X_RATIO,
    y: tallinnCoordinates.y / Y_RATIO,
  },

  paris: {
    x: parisCoordinates.x / X_RATIO,
    y: parisCoordinates.y / Y_RATIO,
  },

  hanover: {
    x: hanoverCoordinates.x / X_RATIO,
    y: hanoverCoordinates.y / Y_RATIO,
  },

  berlin: {
    x: berlinCoordinates.x / X_RATIO,
    y: berlinCoordinates.y / Y_RATIO,
  },

  calcutta: {
    x: calcuttaCoordinates.x / X_RATIO,
    y: calcuttaCoordinates.y / Y_RATIO,
  },

  bengaluru: {
    x: bengaluruCoordinates.x / X_RATIO,
    y: bengaluruCoordinates.y / Y_RATIO,
  },

  washington: {
    x: washingtonCoordinates.x / X_RATIO,
    y: washingtonCoordinates.y / Y_RATIO,
  },

  montreal: {
    x: montrealCoordinates.x / X_RATIO,
    y: montrealCoordinates.y / Y_RATIO,
  },

  rioDeJaneiro: {
    x: rioDeJaneiroCoordinates.x / X_RATIO,
    y: rioDeJaneiroCoordinates.y / Y_RATIO,
  },

  sriLanka: {
    x: sriLankaCoordinates.x / X_RATIO,
    y: sriLankaCoordinates.y / Y_RATIO,
  },

  buenosAires: {
    x: buenosAiresCoordinates.x / X_RATIO,
    y: buenosAiresCoordinates.y / Y_RATIO,
  },

  tokyo: {
    x: tokyoCoordinates.x / X_RATIO,
    y: tokyoCoordinates.y / Y_RATIO,
  },
}
