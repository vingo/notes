/**
 * js 继承
 */
function Parent() {
    this.name = 'parent'
}
Parent.prototype.log = function() {
    console.log('parent log')
}

function Child() {
    this.age = 28
}
Child.prototype.eat = function() {
    console.log('child eat')
}

function fn_extends(target, origin) {
    function Fn() {}
    Fn.prototype = origin.prototype
    target.prototype = new Fn()
    target.prototype.constructor = target
}
// extend
fn_extends(Child, Parent)

let child = new Child()
console.log(child)

//es6 extend

class P {
    constructor() {
        this.name = 'parent'
    }
    log() {
        console.log('parent log')
    }
    static a() {
        console.log('parent staic b')
    }
}
class C extends P {
    constructor() {
        super()
        this.age = 28
    }
    eat() {
        console.log('child eat')
    }
    static b() {
        console.log('child staic b')
    }
}
c= new C()
console.log('函数：', C)
console.log('实例： ', c)
