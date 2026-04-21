function fun(){
    console.log("Function Called")
}

//callback Function
setTimeout(fun, 1000)

//promise
function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

setTimeoutPromisified(2000).then(fun)

//simplified promise
function simplifiedPromise(){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        }, 3000)
    })
    return p;
}

console.log(simplifiedPromise())

simplifiedPromise().then(function(){
    console.log("After 3sec using simplified promise")
})

//own promise class
class Promise2{
    constructor(fun){
        const onDone = () => {
            this.resolve()
        }
        fun(onDone);
    }
    then(resolve){
        this.resolve = resolve;
    }
}

function ownPromisifiedsetTimeout(){
    return new Promise2((resolve) => {
        setTimeout(() => {
            resolve();
        }, 4000)
    })
}

ownPromisifiedsetTimeout().then(() => {
    console.log("Own Promise Called")
})