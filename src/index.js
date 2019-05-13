
// import $ from 'jquery'
require("@babel/polyfill")
require('./index.less') 

/* console.log("hello webpack")
let str = "es6 转化成 es5"

let B;
@log
class A {
    a=1 // es7 提案语法
}
let a = new A()
console.log(a)
function log(target){
    console.log(target)
}

function * gen(){
    yield 1;
}
console.log(gen().next())

console.log('aaa'.includes('a')) */
// 1> expose-loader 暴露在window中
// 2> providePlugin 给每个模块都注入 $ 
// 3> 引入不打包 
console.log($)
console.log(window.$)
if(module.hot){
    module.hot.accpet('./xxx',()=> {
        console.log('文件更新了') // 不会整个页面刷新
    })
}