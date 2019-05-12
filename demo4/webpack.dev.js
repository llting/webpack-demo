let {smart} = require("webpack-merge") // 合并 根据不同环境找不同的配置 
// 命令行输入 npm run build -- --config webpack.dev.js
let base = require("./webpack.base")
module.exports = smart(base,{
    mode:"development"
})