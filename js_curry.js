/**
 * js 柯里化
 */
let curry = function (a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
console.log(curry(1)(2)(3))

let curry2 = function (fn) {
    let _args = []
    return function cb() {
        if (arguments.length === 0) {
            return fn.apply(null, _args)
        }
        [].push.apply(_args, [].slice.call(arguments))
        return cb
    }
}

function add(a, b) {
    return a + b
}
let addCurry = curry2(add)
let sum = addCurry(1)(2)()
console.log(sum)