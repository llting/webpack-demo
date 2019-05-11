let path = require("path")
let webpack = require("webpack")
let webPackDevServer = require("webpack-dev-server")
let HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.[hash:8].js'
    },
    mode:"development",
    module: {},
    plugins: [ new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html",
        minify:{
            removeAttributeQuotes: true,
            // collapseWhitespace: true 
        },
        hash:true
    })],
    devServer: {
        progress: true,
        port: 3000,
        hot: true,
        open: true,
        contentBase: "./dist"
    },
    devtool: 'source-map'
}