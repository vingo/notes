
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
        let promise2
        if(this.status == 'resolved') {
            onFullfilled(this.success)
            promise2 = new myPromise((resolve, reject) => {
                resolve(this.success)
            })
        }
        if(this.status == 'rejected') {
            onRejected ? onRejected(this.failture) : this.catch(this.failture)
            promise2 = new myPromise((resolve, reject) => {
                reject(this.failture)
            })
        }
        if(this.status == 'pending') { // 处理移步等待
            this.onsResolvedCallbacks.push(()=>{
                onFullfilled(this.success)
            })
            this.onRejectedCallbacks.push(() => {
                onRejected(this.failture)
            })
        }
    
    }
    catch(err) {
        throw new Error(err)
    }
}


module.exports = myPromise