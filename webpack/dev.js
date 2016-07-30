'use strict';

const webpack = require('webpack'),
      Server  = require('webpack-dev-server'),
      browser = require('openurl'),
      config  = require('../config'),
      dir     = require('./dir');

const {PORT, PROXY_PORT} = config;

const compiler = webpack({
    devtool: 'cheap-module-eval-source-map',
    entry  : [
        'webpack-dev-server/client',
        //'webpack/hot/only-dev-server',
        dir.src
    ],
    resolve: {
        modules: [dir.cwd, dir.deps]
    },
    output : {
        path      : dir.web,
        filename  : 'app.js',
        publicPath: '/'
    },
    plugins: [
      //new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module : {
        loaders: [
            {
                test   : /\.html$/,
                loader : 'html'
            },
            {
                test   : /\.css$/,
                loader : 'style-loader!css-loader'
            },
            {
                test   : /\.json/,
                loader : 'json-loader'
            }
        ]
    }
});

let first = true;

compiler.plugin('done', () => {if (first) {

    browser.open(`http://localhost:${ PORT }`);
    first = false;
}});

new Server(compiler, {
    contentBase       : dir.web,
    publicPath        : '/',
    //hot               : true,
    historyApiFallback: true,
    proxy             : {
        '/api': {
            target      : 'https://api.github.com',
            changeOrigin: true,
            ws          : true,
            pathRewrite : {
                '^/api': '/'
            }
        }
    }
}).listen(PORT, () => console.log(`Server on port ${ PORT }`));
