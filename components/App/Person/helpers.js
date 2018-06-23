import { oneOf } from 'prop-types'

// Statuses
export const personStatus = {
  WORK: 'work',
  SLEEP: 'sleep',
  FOCUS: 'focus',
  NOT_DISTURB: 'not-disturb',
}

const allPersonStatuses = [
  personStatus.WORK,
  personStatus.SLEEP,
  personStatus.FOCUS,
  personStatus.NOT_DISTURB,
]

export const personStatusPropType = oneOf(allPersonStatuses)

// Colors
export const mapStatusToColor = {
  [personStatus.WORK]: p => p.theme.green,
  [personStatus.SLEEP]: p => p.theme.teal,
  [personStatus.FOCUS]: p => p.theme.pink,
  [personStatus.NOT_DISTURB]: p => p.theme.teal,
}

// Sizes
export const personSizes = {
  TINY: 'tiny',
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
}

export const allPersonSizes = [
  personSizes.TINY,
  personSizes.SMALL,
  personSizes.NORMAL,
  personSizes.LARGE,
]

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
  [personSizes.SMALL]: 1,
  [personSizes.NORMAL]: 2,
  [personSizes.LARGE]: 2,
}

export const personSizePropType = oneOf(allPersonSizes)
