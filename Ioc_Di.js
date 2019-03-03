import { error } from "util";

// DI 依赖注入

//module1
let module1 = () => {
    console.log('eat')
}
//module2
let module2 = () => {
    console.log('wear')
}
//main1
let doSomething = function() {
    let m1 = module1()
    let m2 = module2()
}
// main2
let doSomething2 = function(module1, module2) {
    let m1 = module1()
    let m2 = module2()
}
//main3 use di
let injector = {
    dependencies : {},
    register: function(key, value) {
        this.dependencies[key] = value
    },
    resolve: function(deps, func, scope) {
        var args = []
        deps.forEach(key => {
            if(this.dependencies[key]) {
                args.push(this.dependencies[key], )
            } else {
                throw new Error('cant resolve '+ key)
            }
        })
        return function() {
            func.apply(scope|| {}, args.concat([].slice.call(args,0)))
        }
    }
}