class myPromise{
    constructor(executor) {
        this.status ='pending'
        this.success = undefined
        this.failture = undefined
        let resolve = (val) => {
            if(this.status == 'pending') {
                this.status = 'resolved'
                this.success = val
            }

        }
        let reject = (val) => {
            if(this.status == 'pending') {
                this.status = 'rejected'
                this.failture = val
            }
        }
        try{
            executor(resolve, reject)
        }catch(ex) {
            reject(ex)
        }

    }

    then(onFullfilled, onRejected) {
        console.log('>>>resolved >>>>:', this.status )
        if(this.status == 'resolved') {
            console.log('>>>resolved >>>>: ')
            onFullfilled(this.success)
        }
        if(this.status == 'rejected') {
            onRejected(this.failture)
        }
    }
    catch(err) {
        throw err
    }
}


module.exports = myPromise