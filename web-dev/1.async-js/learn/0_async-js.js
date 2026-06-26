//synchronous code
function sum(a, b){
    return a+b;
}

const res = sum("20", 30)
console.log(res)

//synchronous i/o bound task
const fs = require("fs")
const data = fs.readFileSync('a.txt', 'utf-8')
console.log(data)

// cpu bound tasks
let ans = 0
for(i=0; i<999999999; i++){
    ans = ans+i
}

console.log(ans)

// functional arguments
function sum(a, b){
    return a+b;
}

function doOperation(a, b, s){
    return s(a, b);
}

function op(){
    return doOperation;
}

console.log(doOperation(10, 20, sum))
console.log(op()(10, 20, sum))

//asynchronous code, callbacks
setTimeout(()=> {
    console.log("Will print after 5 sec")
}, 5000)

fs.readFile('a.txt', 'utf-8', (err, data) => {
    console.log(data)
})

console.log("this will get print first then ...")

//make setTimeout Synchronous
function setTimeoutSync(cb, timeout){
    let startTime = new Date();
    while(1){
        let currentTime = new Date();
        if(currentTime.getTime() - startTime.getTime() > timeout){
            break;
        }
    }
    cb()
}

setTimeoutSync(()=>{
    console.log("From setTimeoutSync")
}, 6000)