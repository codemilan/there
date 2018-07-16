// @flow
export type Theme = {
  primary: string,
  primaryLight1: string,
  primaryDark1: string,
  primaryDark2: string,
  gray: string,
  grayLight2: string,
  grayLight1: string,
  grayDark1: string,
  grayDark2: string,
  grayDark3: string,
  green: string,
  teal: string,
  tealDark1: string,
  yellow: string,
  orange: string,
  orangeDark1: string,
  pink: string,

  containerWidth: number,
  radius: number,
  radiusSmall: number,
  radiusBig: number,
  fontTiny115: number,
  fontSmall13: number,
  fontMedium14: number,
  fontMedium15: number,
  fontDefault16: number,
  fontLarge18: number,
  fontSystem: string,
  fontText: string,
  fontTitle: string,
  ZIndexNav: number,
  ZIndexPopovers: number,
  ZIndexModals: number,
}

export type ThemedProps = { theme: Theme }

const theme: Theme = {
  // Global Colors
  primary: '#5BCEFF',
  primaryLight1: '#8BE3FF',
  primaryDark1: '#446EDD',
  primaryDark2: '#33426A',
  gray: '#DCE1E5',
  grayLight2: '#F9F9F9',
  grayLight1: '#ECF1F3',
  grayDark1: '#C0C6CB',
  grayDark2: '#97A5AA',
  grayDark3: '#43535C',
  green: '#26F679',
  teal: '#3FD0DA',
  tealDark1: '#3DA3B1',
  yellow: '#E4FF3E',
  orange: '#F7AC1C',
  orangeDark1: '#E99921',
  pink: '#F03FA9',

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
