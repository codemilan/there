// Do not change!
export const Y_RATIO = 31991.42245737569
export const X_RATIO = 34069.16874401973
export const CENTER = { x: 554, y: 375 }
export const MAP_WIDTH = 1173
export const MAP_HEIGHT = 595

/**
 * Convert point's origin from center to top left
 * @param {Object} point - { x, y }
 * @returns {Object} - { x , y }
 */
export const convertCoorinatesOrigin = ({ x, y }) => ({
  x: CENTER.x + x,
  y: CENTER.y - y,
})
