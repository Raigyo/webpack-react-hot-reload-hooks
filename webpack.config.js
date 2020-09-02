const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
    devtool: "source-map",
    mode: "development",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.(ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                },
            },
            {
                // Preprocess your sass and scss files

                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                // Preprocess your css files
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            }
        ]
    },
    devServer: {
        port: 4000,
        open: true,
        compress: true, //Enable gzip compression for everything served
        historyApiFallback: true,  //fallback to index.html in the event that a requested resource cannot be found.
        hot: true //Enable webpack's Hot Module Replacement feature
    },
    output: {
        filename: "js/main.[hash].js",
        publicPath: "/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "WebDevServer",
            filename: 'index.html',
            template: 'src/assets/index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: '.' }
            ],
        }),

    ]
};