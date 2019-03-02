let pro = require('./myPromise')
s = new pro((res, rej) => {
    res('111')
})
console.log(s, s.then)
s.then(data => {
    console.log(data)
}, err => {
    console.log(err)
})