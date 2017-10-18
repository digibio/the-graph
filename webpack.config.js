const path = require('path');
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const env = process.env.WEBPACK_ENV;
let plugins = [], outputFileName

const libraryName = 'the-graph'

if(env === 'build') {
  plugins.push(new UglifyJSPlugin({
    parallel: {
      cache: true,
      workers: 4 // for e.g
    },
    sourceMap: true
  }));
  outputFileName = libraryName + '.min.js';
}
else {
  outputFileName = libraryName + '.js';
}


module.exports = {
  node: {
    // the advised hack to make fs work within webpack
    fs: 'empty'
  },
  entry: './index.js',
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
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ]
  },
  plugins: plugins
}
