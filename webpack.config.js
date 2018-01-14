const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.join(__dirname, 'src');
const distPath = path.join(__dirname, 'build');

module.exports = {
    entry: [
        `${rootPath}/index.js`
    ],
    output: {
        filename: 'bundle.js',
        path: distPath,
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${rootPath}/index.html`,
            filename: 'index.html',
            inject: 'body'
        })
    ]
};
