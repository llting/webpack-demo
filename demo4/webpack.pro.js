let {smart} = require("webpack-merge")
let base = require("./webpack.base")
module.exports = smart(base,{
    mode:"production"
})
//npm run build -- --config webpack.pro.js 执行生产环境配置