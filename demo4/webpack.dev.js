let { smart } = require("webpack-merge") // 合并 根据不同环境找不同的配置 
// 命令行输入 npm run build -- --config webpack.dev.js
let base = require("./webpack.base")
let webpack = require("webpack")
let Happypack = require("happypack") // 多线程打包
module.exports = smart(base, {
    mode: "development",
    module: {
        noParse: /jquery/  // 当这个包很大并且知道没有依赖第三方模块时， 可以使用noparse不去解析它的依赖， 让它提高打包速度
    },
    rules: [
        {
            test: /\.js$/,
            exclude: /node_module/, // 排除这个文件， 不使用loader解析
            include: path.resolve("src"), // 表示只有这些文件会用到这个loader解析
            // use: {
            //     loader: 'babel-loader',
            //     options: {
            //         presets: [
            //             '@babel/preset-env'
            //         ]
            //     }
            // }
            use: "Happypack/loader?id=js"
        }
    ],
    plugins: [
        new Happypack({
            id: 'js',
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            ]
        }),
        new webpack.IgnorePlugin(/\.\/local/, /moment/) // moment内部会引用 local 模块, 各种语言都含有， 这样就可以使其忽略该模块，然后自己手动引入需要的模块
    ]
})