class AsyncParallelHook {
    constructor(){
        this.tasks = []
    }
    tapAsync(name,task){
        this.tasks.push(task)
    }
    callAsync(){
        let args = [...arguments]
        let finalCallback = args.pop()
        let counter = 0, total = this.tasks.length
        function done(){
            if(++counter == total){
                finalCallback()
            }
        }
        this.tasks.forEach(task =>task(...args,done))

    }
}