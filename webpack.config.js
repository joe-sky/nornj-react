const webpack = require('webpack');
const path = require('path');

const isProd = process.env.NODE_ENV == 'production';
const with_ex = process.env.WITH_EX;
let libName = `nornj-react${with_ex ? `-${with_ex}` : ''}.js`;
if (isProd) {
  libName = `nornj-react${with_ex ? `-${with_ex}` : ''}.min.js`;
}

let plugins = [new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('development')
})];
if (isProd) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compressor: {
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      screw_ie8: true,
      warnings: false
    },
    sourceMap: true
  }));
}

//The packages need to be excluded by webpack
const webpackExternals = {
  'nornj': {
    root: 'nj',
    commonjs2: 'nornj',
    commonjs: 'nornj',
    amd: 'nornj'
  },
  'react': {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
  },
  'react-dom': {
    root: 'ReactDOM',
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom'
  }
};

let indexEntry = './src/base.js',
  libraryRoot = 'NornJReact';

switch(with_ex) {
  case 'mobx':
    {
      webpackExternals.mobx = {
        root: 'mobx',
        commonjs2: 'mobx',
        commonjs: 'mobx',
        amd: 'mobx'
      };
      webpackExternals['mobx-react'] = {
        root: 'mobxReact',
        commonjs2: 'mobx-react',
        commonjs: 'mobx-react',
        amd: 'mobx-react'
      };

      indexEntry = './mobx/index.js';
      libraryRoot += 'Mobx';
    }
    break;
  case 'redux':
    {
      webpackExternals['react-redux'] = {
        root: 'ReactRedux',
        commonjs2: 'react-redux',
        commonjs: 'react-redux',
        amd: 'react-redux'
      };

      indexEntry = './redux/index.js';
      libraryRoot += 'Redux';
    }
    break;
  case 'router':
    {
      webpackExternals['react-router-dom'] = {
        root: 'ReactRouterDOM',
        commonjs2: 'react-router-dom',
        commonjs: 'react-router-dom',
        amd: 'react-router-dom'
      };

      indexEntry = './router/index.js';
      libraryRoot += 'Router';
    }
    break;
}

module.exports = {
  entry: {
    index: indexEntry
  },
  devtool: isProd ? 'source-map' : false,
  externals: webpackExternals,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: libName,
    library: libraryRoot,
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    }]
  },
  plugins
};