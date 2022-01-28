const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',

    entry: {
        main: path.resolve(__dirname, './src/script/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'script/script.bundle.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'GeekBrains Shop JS2',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.bundle.css',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    }
}