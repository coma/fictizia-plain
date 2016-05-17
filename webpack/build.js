'use strict';

const path              = require('path'),
      webpack           = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUNDLE = 'app.js',
      SRC    = path.join(process.cwd(), 'src'),
      WEB    = path.join(process.cwd(), 'web');

const CONFIG = {
    entry  : SRC,
    output : {
        path      : WEB,
        filename  : BUNDLE,
        publicPath: '/'
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings : false,
                screw_ie8: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                SERVER: JSON.stringify('prod')
            }
        })
    ],
    module : {
        loaders: [
            {
                test   : /\.js$/,
                loader : 'babel',
                include: SRC
            },
            {
                test   : /\.html$/,
                loader : 'html',
                include: SRC
            },
            {
                test   : /\.css$/,
                loader : ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
        ]
    }
};

webpack(CONFIG, info => console.log(info));
