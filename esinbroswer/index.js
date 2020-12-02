
function utils (require, module) {
    function calc(n) {
        return n*n;
    }
    module.exports = {
        cal: calc,
        name:'check'
    }
}

function main(require, module) {
    var obj= require('./utils');
    console.log(obj.cal(2));
    console.log(obj.name);
}
// all module
var modules = {
    1: [utils,{}],
    2:[main, {'./utils':1}]
}

var cache={};

function emitLoop(modules, cache, entry) {
    function  newRequire(name) {
        console.log('>>>>>1>>>>>>> name: ', name)
        if(!modules[name]) {
            throw Error({code:'module not found!'})
        }
        var m = cache[name] = {
            exports:{}
        }
        console.log('>>>>>2  modules[name]>>>>>>>', modules[name])

        modules[name][0].call(m.exports, function(x){
            console.log('>>>>>call x>>>>>>>', x,  modules[name][1][x])
            var id =  modules[name][1][x]
            return newRequire(id?id:x);
        }, m);

        console.log('>>>>3 cache>>>>', cache, cache[name].exports);
        return cache[name].exports
    }
    for (var i = 0; i < entry.length; i++) {
        console.log('>>>>>0>>>>>>>', i)
        newRequire(entry[i]);
    }
}

emitLoop(modules, cache, [2])

console.log('>>>>>>>>>>cache: ', cache)
