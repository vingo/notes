var reg = /abc/igm
var str ='abababa'
var reg1 = new RegExp(reg)   // 独立与reg
reg1.abc =1
console.log(reg1.abc) //1
reg.abc // undfined
var reg2 =  RegExp(reg)   // reg2与reg 引用同一个
reg2.abc =2
console.log(reg2.abc) //2
reg.abc // 2
//-----------------
reg = /a/g // 
str.match(reg) // [a,a,a,a]
//-------------------
str ='abcd\na' // 换行 匹配
reg = /a/gm // 
str.match(reg) // [a,a]
//----------
str='38256hfeiti905u34wersi'
reg= /[0-9][0-9][0-9]/g  // 匹配3位连续数字的值
str.match(reg) ;//    ["382", "905"]
//--------------
str='ab1cd'
reg= /[^a][0^b]/g  // 匹配2位, 第一位非a，第二位非b
str.match(reg) ;// ['b1','cd']   

//--------------
str='abcd'
reg= /(abc|bcd)/g  // 匹配1位, 第一位是 abc 或者bcd
str.match(reg) ;// ['abc']   
/**
 * \w === [0-9A-z_]
 * \W === [^\w]
 * \d === [0-9]
 * \D === [^\d]
 * \s === [\t\r\n\v\f ]空白字符  
 * \S === [^\s]
 * \b === 单词边界 如 str='abc de f'
 */
str = 'abc df g'
reg =/\ba/g

/**
 * n+  {1,}
 * n* {0, }
 * n? {0,1}
 * n{x} {x}
 * n{x,y} {x,y}
 * n{x,} {x}
 */