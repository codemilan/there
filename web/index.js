// Now environment variables while in development
require('now-env')
// eslint-disable-next-line
require = require('esm')(module /*, options*/)
module.exports = require('./server.js')
