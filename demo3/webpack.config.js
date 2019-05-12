let path = require("path")
let HtmlwebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: "production",
    //devtool: "source-map", // 源码映射， 会单独生成一个sourcemap文件 出错了 会标示当前的列和行， 是大而且全
   // devtool: "eval-source-map", // 源码映射，不会产生单独的文件， 但是可以显示行和列
   // devtool: "cheap-module-source-map", // 报错不会产生列， 但是是一个单独的映射文件
    devtool: "cheap-module-eval-source-map", // 报错不会产生列， 不产生文件，集成在打包后的文件中
    plugins: [
        new HtmlwebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        })
    ]
}