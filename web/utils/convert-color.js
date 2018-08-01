// @flow
import { convert } from 'css-color-function'

const convertColor = (color: string, modifiers: string): string => {
  return convert(`color(${color} ${modifiers})`)
}

export default convertColor
