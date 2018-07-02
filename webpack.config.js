const path = require('path');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const browserConfig = {
    entry: [
        './src/browser/index.jsx'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [ 
                    'style-loader', 
                    'css-loader',
                    'postcss-loader' 
                ]
            },
            {   
                test: /\.(ico|png|svg|jpg|jpeg|eot|woff|ttf|gif)$/,
                use: [
                  'file-loader'
                ]
            },
        ]
    }
};

const serverConfig = {
    entry: [
        './src/server/index.js'
    ],
    target: "node",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js',
        publicPath: '/',
        library: 'app',
        libraryTarget: "commonjs2"
    },
    devtool: "source-map",
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
                
            },
            {
                test: /\.css$/,
                use: [
                    {
                      loader: "css-loader/locals"
                    }
                ]
            },
            {   
                test: /\.(png|svg|jpg|jpeg|eot|woff|ttf|gif)$/,
                use: [
                  'file-loader?emitFile=false'
                ]
            },
        ]
    }
};

module.exports = [browserConfig, serverConfig];