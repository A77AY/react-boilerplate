module.exports = function loadJSX(include) {
    return {
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
                    include: include
                }
            ]
        }
    };
};