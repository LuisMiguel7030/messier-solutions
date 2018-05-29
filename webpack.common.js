const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.jsx'
    ],
    output: {
        path: __dirname + './public',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],

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
                test: /\.(png|svg|jpg|jpeg|eot|woff|ttf|gif)$/,
                use: [
                  'file-loader'
                ]
            },
        ]
    }
};