var obj = {
    name: 'aaa',
    age: '123',
    card: [1, 2],
    wife: {
        name: 'xx',
        son: {
            name: 'yyy'
        }
    }
}
var obj1 = {}
function copy(origin, target) {
    for(let key in origin) {
        target[key] = origin[key]
    }
    console.log('>>copy target; ', target)
    return target
}
//深度copy
function deepCopy(origin, target = {}) {
    let toStr = Object.prototype.toString
    let arrStr = '[object Array]'
    for(let key in origin) {
        let val = origin[key]
        if(origin.hasOwnProperty(key)) {
            if(val !== 'null' && typeof val == 'object') {
                target[key] = toStr.call(val) == arrStr ? [] : {}
                 deepCopy(val, target[key])
            } else {
                target[key] = origin[key]
            }
        }
    }
    console.log(`>>>>>new target: `, target)
    return target

}
//copy(obj, obj1)
//deepCopy(obj)