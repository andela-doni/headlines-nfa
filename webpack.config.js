const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');
const DotEnvPlugin = require('dotenv-webpack');

const dotEnvPlugin = new DotEnvPlugin({
  path: './.env',
});

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './js/client.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  output: {
    path: `${__dirname}/src/`,
    filename: 'client.min.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    dotEnvPlugin,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  node: {
    fs: 'empty'
  }
};
