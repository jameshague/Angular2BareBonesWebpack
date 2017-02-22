const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var helpers = require('./helpers')

module.exports = {
    entry: './app/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],                
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.css$/,
                loaders: 'style-loader!css-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ],
    },
    plugins:
    [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    resolve: {
        extensions: [".ts", ".js"]
    },
};