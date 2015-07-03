var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './assets/bootstrapper.js',
  output: {
    path: __dirname + '/assets/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules|assets\/vendor)/,
      loader: 'babel'
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url?&limit=100000'
    }]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
