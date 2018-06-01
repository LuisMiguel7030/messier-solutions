const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/browser/index.jsx'
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
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './public',
      historyApiFallback: true
    },
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