let path = require("path")
let webpack = require("webpack")
let webPackDevServer = require("webpack-dev-server")
let HtmlWebpackPlugin = require("html-webpack-plugin")
let MiniCssExtractPlugin = require("mini-css-extract-plugin")
let OptimizeCss = require("optimize-css-assets-webpack-plugin")
let UglifyjsWbpackPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.[hash:8].js'
    },
    /*  externals: { // 在html中直接 script src="" 引入jquery  在每个js模块中 import $ from jquery 不把jquery打包到 bundle.js
         jquery : "$"
     }, */
    mode: "development", //  "development" | "production" | "none"
    optimization: { //  优化项
        minimizer: [

            new OptimizeCss(),
            new UglifyjsWbpackPlugin({
                cache: true,
                parallel: true, // 并发
                sourceMap: true
            })
        ]
    }
    ,
    module: {

        rules: [
            /*  {
                 test: require.resolve('jquery'), // 全局使用$ window.$ 
                 use:'expose-loader?$'
             }, */
            /* {
                test: /\.js$/,
                use:{
                    loader: 'eslint-loader',
                    options:{
                        enforce: 'pre' // 强制优先执行
                    }
                },

            }, */
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ],
                            "presets": ["@babel/preset-env"],
                            "plugins": [
                                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                                ["@babel/plugin-proposal-class-properties", { "loose": true }],
                                "@babel/plugin-transform-runtime"
                            ]
                        },
                    }

                ],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.less$/,
                //use: ["style-loader","css-loader","less-loader"]
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            }]


    },
    plugins: [
        new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html",
        minify: {
            removeAttributeQuotes: true,
            // collapseWhitespace: true 
        },
        // hash:true
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        new webpack.ProvidePlugin({ // 在每个模块中注入$
            $: 'jquery'
        })
    ],
    devServer: {
        progress: true,
        port: 3000,
        hot: true,
        open: true,
        contentBase: "./dist"
    },
    devtool: 'source-map'
}