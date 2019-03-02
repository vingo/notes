let pro = require('./myPromise')
s = new pro((res, rej) => {
    rej('111')
})
console.log(s, s.then)
s.then(data => {
    console.log(data)
})
.catch(err => {
    console.log(err)
})