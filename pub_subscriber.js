/**
 * 观察者模式
 */
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>> verison 1')
let data = {
    name: 'vingo'
}
//存储订阅者
let subscribers = []
//添加订阅
const addSub = (fn) => {
    subscribers.push(fn)
}
// 发布
const dispatch = (name) => {
    data.name = name // 数据更新
    // 发生消息 通知 订阅者
    subscribers.forEach(sub => {
        sub()
    })
}

// 调用
//发起订阅者
addSub(() => {
    console.log(data.name)
})
//发布
dispatch('新消息1')
dispatch('新消息2')
dispatch('新消息3')
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>> verison 2')
//version2
const creatStore = (initState) => {
    let state = initState
    let subscribers = []
    // 订阅 定义subscribe
    const subscribe = (fn) => {
        subscribers.push(fn)
    }
    const dispatch = (currentState) => {
        state = currentState
        // 状态更新，推送通知给所有订阅者
        subscribers.forEach(fn => fn())
    }
    const getState = () => {
        return state
    }
    return {
        subscribe,
        dispatch,
        getState
    }
}
// invoke 2
let initState = {
    num: 0
}
const store = creatStore(initState)
//添加订阅者
store.subscribe(() => {
    let state = store.getState()
    console.log('cur state: ', state)
})
initState.num++
store.dispatch(initState)

initState.num--
store.dispatch(initState)

initState.num--
store.dispatch(initState)

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>> verison 3')

// 管理者
function reducer(state, action) {
    switch (action.type) { //通过传进来的 action.type 让管理者去匹配要做的事情
        case 'add':
            return {
                ...state,
                num: state.num + 1
            }
            break
        case 'minus':
            return {
                ...state,
                num: state.num - 1
            }
            break
        case 'change':
            return {
                ...state,
                num: state.num + action.val
            }
            break
        default:
            return state
            break
    }
}
//version3
const creatStore2 = (reducer, initState) => {
    let state = initState
    let subscribers = []
    // 订阅 定义subscribe
    const subscribe = (fn) => {
        subscribers.push(fn)
    }
    const dispatch = (action) => {
        // 根据 action 查询对应的操作并得到最新的状态
        state = reducer(state, action)
        // 状态更新，推送通知给所有订阅者
        subscribers.forEach(fn => fn())
    }
    const getState = () => {
        return state
    }
    return {
        subscribe,
        dispatch,
        getState
    }
}

let initState2 = {
    num: 0
}
const store2 = creatStore2(reducer, initState2)
store2.subscribe(() => {
    let state = store2.getState()
    console.log('get cur state of store2 : ', state.num)
})
store2.dispatch({
    type: 'add'
})
store2.dispatch({
    type: 'minus'
})
store2.dispatch({
    type: 'change',
    val: 5
})