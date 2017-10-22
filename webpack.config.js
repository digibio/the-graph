const path = require('path');
const webpack = require('webpack')
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const env = process.env.WEBPACK_ENV;
let plugins = [], outputFileName

const libraryName = 'theGraph'
const fileName = 'the-graph.js'

module.exports = {
  node: {
    // the advised hack to make fs work within webpack
    fs: 'empty'
  },
  entry: [
    './index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: fileName,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /themes\/the-graph-.*\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[local]'
        }
      }
    ]
  },
}
