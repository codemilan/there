import { oneOf } from 'prop-types'

export const personStatus = {
  WORK: 'work',
  SLEEP: 'sleep',
  FOCUS: 'focus',
  NOT_DISTURB: 'not-disturb',
}

const personStatuses = [
  personStatus.WORK,
  personStatus.SLEEP,
  personStatus.FOCUS,
  personStatus.NOT_DISTURB,
]

export const personStatusPropType = oneOf(personStatuses)

export const mapStatusToColor = {
  [personStatus.WORK]: p => p.theme.green,
  [personStatus.SLEEP]: p => p.theme.teal,
  [personStatus.FOCUS]: p => p.theme.orange,
  [personStatus.NOT_DISTURB]: p => p.theme.teal,
}
