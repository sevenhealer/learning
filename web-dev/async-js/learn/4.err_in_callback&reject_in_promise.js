//err
//some callback function does not need err like setTimeout() but in fs.readFile() if file not exist err is needed
setTimeout(() => {
    console.log('When the callback queue is free it will run')
}, 1000)

const fs = require('fs')
fs.readFile('aacaocmoa.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

//reject in Promise
function readFilePromisified(file){
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

readFilePromisified('a.txt').then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})