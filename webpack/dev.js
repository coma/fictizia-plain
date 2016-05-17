'use strict';

const path              = require('path'),
      webpack           = require('webpack'),
      webpackDevServer  = require('webpack-dev-server'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      Forever           = require('forever-monitor').Monitor,
      browser           = require('openurl'),
      config            = require('../config');

const BUNDLE = 'app.js',
      SRC    = path.join(process.cwd(), 'src'),
      WEB    = path.join(process.cwd(), 'web'),
      LOGS   = path.join(process.cwd(), 'logs'),
      SERVER = path.join(process.cwd(), 'server');

const compiler = webpack({
    devtool: 'eval-source-map',
    entry  : [
        'webpack-dev-server/client',
        SRC
    ],
    output : {
        path      : WEB,
        filename  : BUNDLE,
        publicPath: '/'
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                SERVER: JSON.stringify('dev')
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
});

const backend = new Forever(SERVER, {
    silent : true,
    outFile: path.join(LOGS, 'out.log'),
    errFile: path.join(LOGS, 'error.log'),
    pidFile: path.join(LOGS, 'pid')
});

const server = new webpackDevServer(compiler, {
    proxy : {
        '*': 'http://localhost:' + config.proxyPort
    },
    stats : {
        colors: true
    },
    inline: true
});

backend.on('start', () => browser.open('http://localhost:' + config.port));

compiler.plugin('done', stats => {

    if (!backend.running && stats.compilation.errors.length < 1) {

        backend.start();
    }
});

server.listen(config.port);
