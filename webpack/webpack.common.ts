let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let helpers = require('../config/helpers');

import * as fs from 'fs';
let nodeExternals = require('webpack-node-externals');

let nodeModules = {};
fs.readdirSync('node_modules')
.filter(function(x) {
  return ['.bin'].indexOf(x) === -1;
})
.forEach(function(mod) {
  nodeModules[mod] = 'commonjs ' + mod;
});

module.exports = {
  entry: {
    'app': helpers.root() + '/back/app.server.ts'
  },
  resolve: {
    extensions: [ '.ts', '.js'],
  },
  externals: [nodeExternals({
    whitelist: [
      'express'
    ]
  })],
  target: 'node',
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {
        transpileOnly: true
      }
    }]
  },
  plugins: [
    // Fixes warning in moment-with-locales.min.js
    //   Module not found: Error: Can't resolve './locale' in ...
    new webpack.IgnorePlugin(/\.\/locale$/),
    new webpack.IgnorePlugin(/vertx/),
    new webpack.DefinePlugin({
      $dirname: '__dirname'
    })
  ]
};
