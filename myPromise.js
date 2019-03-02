function resolvePromise(promise2, x, resolve, reject) {
    if(promise2 == x) {
        reject(new Error('引用错误'))
    }
    if( x !== null && (typeof x == 'object' || typeof x == 'function')) {
        try {
            let then = x.then
            if(typeof then == 'function') {

                then.call(x, data =>{ //data 是promise
                    resolvePromise(promise2, data, resolve, reject) //
                }, err =>{
                    reject(err)
                })
            } else {
                resolve(x)
            }

        }catch(err) {
            reject(err)
        }
    } else {
        resolve(x)
    }
}

class myPromise{
    constructor(executor) {
        this.status ='pending'
        this.success = undefined
        this.failture = undefined
        this.onsResolvedCallbacks = [] // 保存成功 onFullfilled的执行函数
        this.onRejectedCallbacks = []   // 保存失败 onRejected 的执行函数

        let resolve = (val) => {
            if(this.status == 'pending') {
                this.status = 'resolved'
                this.success = val
                this.onsResolvedCallbacks.forEach(cb => {
                    cb()
                })
            }

        }  
        let reject = (val) => {
            if(this.status == 'pending') {
                this.status = 'rejected'
                this.failture = val
            }
            this.onRejectedCallbacks.forEach(cb => {
                cb()
            })
        }
        try{
            executor(resolve, reject)
        }catch(ex) {
            reject(ex)
        }

    }

    then(onFullfilled, onRejected) {
        let promise2;
        if(this.status == 'resolved') {
            promise2 = new myPromise((resolve, reject) => {
                // onFullfilled(this.success)
                let x = onFullfilled(this.success)
                resolvePromise(promise2, x, resolve, reject)
                //resolve(this.success)
            })
        }
        if(this.status == 'rejected') {
            promise2 = new myPromise((resolve, reject) => {
                // onRejected ? onRejected(this.failture) : this.catch(this.failture)
                let x = onRejected(this.failture)
                resolvePromise(promise2, x, resolve, reject)
            })
        }
        if(this.status == 'pending') { // 处理移步等待
            promise2 = new myPromise((resolve, reject) => {

                this.onsResolvedCallbacks.push(()=>{
                    let x = onFullfilled(this.success)
                    resolvePromise(promise2, x, resolve, reject)
                })
                this.onRejectedCallbacks.push(() => {
                    let x = onRejected(this.failture)
                    resolvePromise(promise2, x, resolve, reject)
                })
            })
        }
        return promise2
    }
    catch(err) {
        throw new Error(err)
    }
}


module.exports = myPromise