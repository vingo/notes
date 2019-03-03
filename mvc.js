let M = {}
let V = {}
let C = {}
// Model 存储数据
M.data = 'hello world'
// View 负责更新到荧幕上
V.render = function(m) {
    alert(m.data)
}
// controller 作为 M和V的桥梁
C.handle = function() {
    V.render(M)
}
//初始化
window.onload = C.handle()