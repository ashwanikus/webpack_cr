const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssOutput = 'css/style.css';

module.exports = {
    entry: {
        "js/app": "./src/js/app.js",
        "cart": "./src/scss/cart.scss",
        "products": "./src/scss/products.scss",
        "login": "./src/scss/login.scss",
        "carousel": "./src/scss/carousel.scss",
        "query": "./src/scss/query.scss",
        "home": "./src/scss/home.scss"
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    devServer: {
        contentBase: "dist",
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].html"
                        }
                    }, {
                        loader: 'extract-loader'
                    }, {
                        loader: 'html-loader',
                        options: {
                            attrs: "[img:src]"
                        }
                    }
                ]
            }, {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "images/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(cssOutput),
        new CopyWebpackPlugin([
            { from: 'src/images', to: 'images' }
        ])
    ]
};