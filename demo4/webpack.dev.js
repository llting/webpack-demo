let {smart} = require("webpack-merge") // 合并 根据不同环境找不同的配置 
// 命令行输入 npm run build -- --config webpack.dev.js
let base = require("./webpack.base")
module.exports = smart(base,{
    mode:"development",
    module:{
        noParse: /jquery/  // 当这个包很大并且知道没有依赖第三方模块时， 可以使用noparse不去解析它的依赖， 让它提高打包速度
    }
})