const webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            fallback: 'file-loader',
                            name: '[name][md5:hash].[ext]',
                            outputPath: 'assets/',
                            publicPath: '/assets/'
                        }
                    }
                ]
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: {
                    loader: 'tslint-loader',
                    options: {
                        emitErrors: process.env.NODE_ENV !== 'production',
                    }
                },
                exclude: /(node_modules)/,
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            }
        ],
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.css', '.scss', '.ts', '.tsx'],
    },
    plugins: [
        new webpack.ProgressPlugin(),
    ],
};