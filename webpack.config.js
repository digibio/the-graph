const path = require('path');
const webpack = require('webpack')
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const env = process.env.WEBPACK_ENV;
let plugins = [], outputFileName

const libraryName = 'the-graph'
outputFileName = libraryName + '.js';


module.exports = {
  node: {
    // the advised hack to make fs work within webpack
    fs: 'empty'
  },
  entry: [
    "font-awesome/scss/font-awesome.scss",
    './index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: outputFileName,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.styl$/,
        loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
    ],
  },
}
