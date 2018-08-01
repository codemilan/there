// @flow
const theme = {
  // Global Colors
  primary: '#5BCEFF',
  primaryLight1: '#8BE3FF',
  primaryLight2: '#D5FFFF',
  primaryDark1: '#446EDD',
  primaryDark2: '#33426A',
  gray: '#DCE1E5',
  grayLight2: '#F9F9F9',
  grayLight1: '#ECF1F3',
  grayDark1: '#C0C6CB',
  grayDark2: '#97A5AA',
  grayDark3: '#63717D',
  green: '#26F679',
  teal: '#3FD0DA',
  tealDark1: '#3DA3B1',
  tealDark2: '#3D5E62',
  yellow: '#E4FF3E',
  orange: '#F7AC1C',
  orangeLight2: '#FFFBD7',
  orangeDark1: '#E99921',
  pink: '#F03FA9',
  pinkLight2: '#FFF9FB',
  redLight2: '#FFEAF0',

  // Global Sizes
  containerWidth: 1200,
  radius: 6,
  radiusSmall: 3,
  radiusBig: 8,

  fontTiny115: 11.5,
  fontSmall13: 13,
  fontMedium14: 14,
  fontMedium15: 15,
  fontDefault16: 16,
  fontLarge18: 18,

  // Fonts
  fontSystem: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  fontText: `'IBM Plex Sans'`,
  fontTitle: `Poppins`,

  // Z Indexes
  ZIndexNav: 15,
  ZIndexPopovers: 20,
  ZIndexModals: 30,
}

export default theme

export type Theme = typeof theme
export type ThemedProps = { theme: Theme }
