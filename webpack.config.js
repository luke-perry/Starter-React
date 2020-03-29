require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTemplate = require('html-webpack-template')

const config = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.svg$/,
                use: 'file-loader',
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            mimetype: 'image/png',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
        ],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: HtmlWebpackTemplate,
            appMountId: 'app',
            title: 'ReactStarter',
            meta: { viewport: 'width=device-width, initial-scale=1, maximum-scale=1' },
        }),
    ],
}

module.exports = config
