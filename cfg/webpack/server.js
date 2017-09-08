const path = require('path');
const webpack = require('webpack');
const App = require('../App');
const getNodeModules = require('../utils/getNodeModules');

module.exports = {
    devtool: '#cheap-module-source-map',
    target: 'node',
    node: {
        __dirname: true,
        __filename: true
    },
    entry: {
        server: [
            'webpack/hot/poll?1000',
            App.Paths.Src.SERVER,
        ]
    },
    output: {
        path: App.Paths.TMP,
        filename: '[name].js',
        chunkFilename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: [
                            ['env', {
                                modules: false,
                                targets: {
                                    browsers: ['> 1%']
                                },
                                useBuiltIns: true
                            }],
                            'stage-2',
                            'react'
                        ],
                        plugins: [
                            'react-hot-loader/babel',
                            'transform-decorators-legacy'
                        ]
                    }
                },
                include: App.Paths.SRC
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    externals: getNodeModules(App.Paths.NODE_MODULES)
};