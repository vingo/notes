const babel = require("babel-core");
const esprima = require("esprima");

const fs = require('fs')
let config = fs.readFileSync('./.babelrc')
config = JSON.parse(config)
const babelTr = babel.transform('demo1.js', config)
// console.log(babelTr.code)
// console.log('--------')
// console.log(babelTr.map)
// console.log('--------')

// console.log(babelTr.ast)

const ast = esprima.parse(fs.readFileSync('./demo1.js','utf-8'), {sourceType: 'module', jsx: true});
console.log(ast.body.map(item=>{
        if(item.type == 'VariableDeclaration') {
            console.log( item.declarations[0].init ,'-----')
            item.declarations[0].init&& item.declarations[0].init.callee && console.log('name: ', item.declarations[0].init.callee.name)
        }
        return item.type
    }
))

// console.log(ast)