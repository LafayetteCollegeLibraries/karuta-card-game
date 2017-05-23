const webpack = require('webpack')
const config = require('./webpack.config')

config.plugins = [
  new webpack.optimize.UglifyJsPlugin(),
]

module.exports = config
