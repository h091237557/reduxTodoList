var path = require('path');
var webpack = require('webpack');

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // necessary for hot reloading with IE:
    'eventsource-polyfill',
    // listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client',
    // your code:
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },

      {
          test: /\.(js|jsx)?$/,
          loader: 'babel',
          exclude: /node_modules/,
          include: path.join(__dirname, 'src'),
          query: {
              presets: [ 'react-hmre', "es2015", "stage-0", "react" ],
              plugins: [ "transform-decorators-legacy" ],
          }
      },
    ]
  }
};
