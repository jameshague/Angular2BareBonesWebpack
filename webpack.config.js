const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var helpers = require('./helpers')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './app/main.ts',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'app'),
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', loader: 'css-loader?sourceMap' })
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'app'),
                loader: 'raw-loader'
            },
            {
                test: /\.jpg$/,
                loaders: 'file-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ],
    },
    plugins:
    [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new ExtractTextPlugin('[name].css')

        // ,new BundleAnalyzerPlugin({
        //     analyzerMode: 'static'
        // })
    ],
    resolve: {
        extensions: [".ts", ".js"]
    },
};