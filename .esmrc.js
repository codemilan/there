const IS_DEV = process.env.NODE_ENV === 'development'

module.exports = {
  debug: IS_DEV,
  // Disabled due to VS Code bug for source maps that aren't not base64
  sourceMap: IS_DEV,
}
