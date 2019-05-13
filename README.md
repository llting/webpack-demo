# webpack-demo

## mini-css-extract-plugin
- 抽离css样式
- 打包压缩css   mode:"development" 不会走 optimization 配置项

## autoprefixer 
- 给样式加上前缀,配合 postcss-loader使用

## uglifyjs-webpack-plugin
- 压缩js


## babel-loader @babel/core @babel/preset-env
- 把es6转化成es5

## expose-loader
- 暴露全局的loader

## html-withimg-loader
- 解决html页面中的img的src路径

## tree-shaking 
- 前端导入模块的时候 使用import 这样在生产环境下 打包的时候， 会过滤掉没用到的代码， 而require则不会过滤

## @babel/plugin-syntax-dynamic-import
- 懒加载 动态导入 import("xxx.js").then(data => {...})