const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const App = require('../App');
const loadJSX = require('./parts/loadJSX');

module.exports = merge(
    {
        devtool: '#cheap-module-source-map',
        entry: {
            client: [
                'react-hot-loader/patch',
                'webpack-dev-server/client?' + App.DevelopmentServer.URL,
                'webpack/hot/only-dev-server',
                App.Paths.Src.CLIENT,
            ]
        },
        output: {
            path: App.Paths.TMP,
            publicPath: `${App.DevelopmentServer.URL}/${App.Structure.PUB}/${App.Structure.Pub.JS}`,
            filename: '[name].js'
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin({
                // multiStep: true,
                // fullBuildTimeout: 0,
                // requestTimeout: 0
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ],
        devServer: {
            // historyApiFallback: true,
            hot: true,
            inline: true,
            // stats: 'errors-only',
            host: App.DevelopmentServer.HOST,
            port: App.DevelopmentServer.PORT,
            publicPath: `/${App.Structure.PUB}/${App.Structure.Pub.JS}`,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
    },
    loadJSX(App.Paths.SRC)
);