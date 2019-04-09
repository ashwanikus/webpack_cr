const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        "js/app": "./src/js/app.js",
        "css/cart": "./src/scss/cart.scss",
        "css/products": "./src/scss/products.scss",
        "css/login": "./src/scss/login.scss",
        "css/carousel": "./src/scss/carousel.scss",
        "css/query": "./src/scss/query.scss",
        "css/home": "./src/scss/home.scss"
    },
    mode: "production",
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
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            name:"[name].html"
                        }
                    }, {
                        loader: 'extract-loader'
                    }, {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};