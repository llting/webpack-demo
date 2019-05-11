let path = require("path")

let HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry : {
        index: "./src/index.js",
        other: "./src/other.js"
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].js"
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            filename: "other.html",
            template: "./src/index.html",
            chunks: ["other"]
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            chunks: ["index"]
        })
    ]
}