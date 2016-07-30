'use strict';

const webpack           = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      dir               = require('./dir');

module.exports = {
    entry  : dir.src,
    resolve: {
        modules: [dir.cwd, dir.deps]
    },
    output : {
        path      : dir.web,
        filename  : 'app.js',
        publicPath: '/'
    },
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
          compressor: {
              warnings : false,
              screw_ie8: true
          }
      }),
      new ExtractTextPlugin('app.css', {
          allChunks: true
      })
    ],
    module : {
        loaders: [
            {
                test   : /\.html$/,
                loader : 'html'
            },
            {
                test   : /\.css$/,
                loader : ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test   : /\.json/,
                loader : 'json-loader'
            }
        ]
    },
    stats: {
        progress    : true,
        colors      : true,
        modules     : true,
        reasons     : true,
        errorDetails: true
    }
};
