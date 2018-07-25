// @flow
// Statuses
export const personStatus = {
  WORK: 'working',
  SLEEP: 'asleep',
  FOCUS: 'focused',
  NOT_DISTURB: 'not-disturb',
}

// Colors
export const mapStatusToColor = {
  // $FlowFixMe
  [personStatus.WORK]: p => p.theme.green,
  // $FlowFixMe
  [personStatus.SLEEP]: p => p.theme.teal,
  // $FlowFixMe
  [personStatus.FOCUS]: p => p.theme.pink,
  // $FlowFixMe
  [personStatus.NOT_DISTURB]: p => p.theme.teal,
}

// Sizes
export type OnMapPhotoSize = 'tiny' | 'small' | 'normal' | 'large'

export const personSizes: { [key: string]: OnMapPhotoSize } = {
  TINY: 'tiny',
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
}

export const photoSizesMap = {
  [personSizes.TINY]: 24,
  [personSizes.SMALL]: 36,
  [personSizes.NORMAL]: 48,
  [personSizes.LARGE]: 60,
}

export const photoSizeToBorderSizeMap = {
  [personSizes.TINY]: 3,
  [personSizes.SMALL]: 3,
  [personSizes.NORMAL]: 4,
  [personSizes.LARGE]: 5,
}

export const photoSizeToWhiteGapMap = {
  [personSizes.TINY]: 1,
  [personSizes.SMALL]: 1.5,
  [personSizes.NORMAL]: 2,
  [personSizes.LARGE]: 2,
}

export const photoSizeToGapMap = {
  [personSizes.TINY]: 2,
  [personSizes.SMALL]: -4,
  [personSizes.NORMAL]: 5,
  [personSizes.LARGE]: 6,
}
