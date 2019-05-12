let path = require("path")
let HtmlwebpackPlugin = require("html-webpack-plugin")
let CleanWebpackPlugin = require("clean-webpack-plugin") // 清除输出目录之前的内容
let CopyWebpackPlugin = require("copy-webpack-plugin")
let webpack = require("webpack")
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer:{
        proxy:{
            
            before(app) {
                app.get("/api", (req,res) => {
                    res.send("hello") // 2》 mock 数据 前端调试用
                })
            }
           /* "/api" : {
            target: "http://localhost:8080",
            pathRewrite: {"/api": ""} //重写请求 例子 /api/user --> /user
            } */
            // '/api' : "http://localhost:8080" 1》//跨域配置例子

        // 3> 在服务端中启用webpack  引入webpack webpack-dev-middleware见 服务端解决跨域.png
        }
    },
    /* watch:true,
    watchOptions: {
        poll: 1000, // 每秒监控1000次,
        aggregateTimeout: 500 ,// 防抖 500 毫秒内的监控不打包
        ignored: /node_modules/ // 忽略文件
    }, */
    mode: "production",
    //devtool: "source-map", // 源码映射， 会单独生成一个sourcemap文件 出错了 会标示当前的列和行， 是大而且全
    // devtool: "eval-source-map", // 源码映射，不会产生单独的文件， 但是可以显示行和列
    // devtool: "cheap-module-source-map", // 报错不会产生列， 但是是一个单独的映射文件
    devtool: "cheap-module-eval-source-map", // 报错不会产生列， 不产生文件，集成在打包后的文件中
    plugins: [
        new HtmlwebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin() , // 打包删除dist目录,
        new CopyWebpackPlugin([{
            from: "hello", to: "./", // ./代表 dist目录
            
        }]),
        new webpack.BannerPlugin("版权声明")
    ]
}