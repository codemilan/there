import { string, arrayOf } from 'prop-types'

export const RetinaImage = ({ src, srcSet, ...props }) => {
  if (srcSet && Array.isArray(srcSet)) {
    const srcString = src || srcSet[0]
    const srcSetString = srcSet
      .map((srcString, i) => srcString + (i > 0 ? ` ${i + 1}x` : ``))
      .join(', ')

    return <img src={srcString} srcSet={srcSetString} {...props} />
  }

  return <img src={src} srcSet={srcSet} {...props} />
}

RetinaImage.propTypes = {
  src: string,
  srcSet: arrayOf(string),
}
