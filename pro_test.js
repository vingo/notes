let pro = require('./myPromise')
// s = new pro((res, rej) => {
//     rej('111')
// })
// s.then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log(err)
// })
s1 = new pro((res, rej) => {
    setTimeout(function() {
        res('setimeout....')
    }, 1000)
})
s1.then(data => {
    console.log(data)
}, err => {
    console.log(err)
})
