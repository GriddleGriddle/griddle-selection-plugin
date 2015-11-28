var webpack = require('webpack');

var reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
};

var immutableExternal = {
  root: 'Immutable',
  commonjs2: 'immutable',
  commonjs: 'immutable',
  amd: 'immutable'
}
module.exports = {
  devtool: 'eval',
  entry: './src/index',
  output: {
    path: __dirname + '/build/',
    filename: 'griddle-selection-plugin.js',
    publicPath: '/build/',
    library: 'GriddleSelectionPlugin',
    libraryTarget: 'umd'
  },
  plugins: [
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    'react': reactExternal,
    'griddle-core': 'griddle-core',
    'immutable': immutableExternal
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        'plugins': ['babel-plugin-object-assign'],
        'stage': 0
      },
      exclude: /node_modules/,
    } ]
  }
};
