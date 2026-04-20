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