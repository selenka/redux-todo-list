var webpack = require('webpack');

module.exports = {
    entry: [
        './index.js'
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: './',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        "react",
                        "es2015",
                        "stage-0"
                    ]

                }
            }
        ]
    }
};