//callback hell
//Problem: print hello after 1 sec and after 3sec of printing hello print there and after 4sec of printing there print friend!
setTimeout(() => {
    console.log('hello')
    setTimeout(() => {
        console.log('there')
        setTimeout(() => {
            console.log('friend!')
        } ,4000)
    }, 3000)
},1000)

//this is completelty a callback hell

//How Promise Fix Some
function setTimeoutPromisified(ms){
    return new Promise((resolve) => setTimeout(resolve, ms))
}

setTimeoutPromisified(1000).then(() => {
    console.log('hello');
    return new setTimeoutPromisified(3000);
}).then(() => {
    console.log('there');
    return new setTimeoutPromisified(4000);
}).then(() => {
    console.log('friend!');
})

//Async Await
//Complete Callback hell indentation fix
async function func() {
    await setTimeoutPromisified(1000);
    console.log('hello');
    await setTimeoutPromisified(3000);
    console.log('there');
    await setTimeoutPromisified(4000);
    console.log('friend!');
}

func();