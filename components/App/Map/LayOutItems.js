import { PureComponent } from 'react'
import { arrayOf, object } from 'prop-types'
import memoize from 'fast-memoize'

// Utils
import { convertCoorinatesOrigin } from './helpers'
import {
  personSizes,
  photoSizesMap,
  photoSizeToBorderSizeMap,
  photoSizeToGapMap,
} from '../Person'

export default class LayOutItems extends PureComponent {
  static propTypes = {
    items: arrayOf(object).isRequired,
  }

  convertCoorinatesOrigin = memoize(convertCoorinatesOrigin)

  getPersonSize = personSizeKey => {
    const personSize = photoSizesMap[personSizeKey]
    const border = photoSizeToBorderSizeMap[personSizeKey]
    const gap = photoSizeToGapMap[personSizeKey]

    return personSize + border * 2 + gap
  }

  doPersonOverlapGroup = (
    personSizeKey,
    personPoint,
    groupPoint,
    groupItemsCount,
  ) => {
    const personSize = this.getPersonSize(personSizeKey)

    const groupWidth = personSize
    const groupHeight = personSize * groupItemsCount

    const allowedMiddleSpaceX = groupWidth / 2 + personSize / 5
    const allowedMiddleSpaceY = groupHeight / 2 + personSize / 5

    const doOverlapX =
      Math.abs(groupPoint.x - personPoint.x) <= allowedMiddleSpaceX
    const doOverlapY =
      Math.abs(groupPoint.y - personPoint.y) <= allowedMiddleSpaceY

    return doOverlapX && doOverlapY
  }

  layOut = (items, personSizeKey) => {
    const groups = []

    items.forEach(({ point, ...item }) => {
      const pointOnMap = this.convertCoorinatesOrigin(point)

      const foundIndex = groups.findIndex(group =>
        this.doPersonOverlapGroup(
          personSizeKey,
          pointOnMap,
          group.point,
          group.items.length,
        ),
      )

      if (foundIndex === -1) {
        // If it belongs to no group
        groups.push({
          point: pointOnMap,
          items: [item],
        })
        return
      }

      // Add to the too close group we've found
      groups[foundIndex].items.push(item)
    })

    return groups
  }

  getPersonSizeKey = length => {
    if (length >= 30) {
      return personSizes.TINY
    } else if (length >= 15) {
      return personSizes.SMALL
    } else if (length >= 8) {
      return personSizes.NORMAL
    } else {
      return personSizes.LARGE
    }
  }

  render() {
    const sizeKey = this.getPersonSizeKey(this.props.items.length)
    const groups = this.layOut(this.props.items, sizeKey)

    return this.props.children({
      sizeKey,
      groups,
    })
  }
}
