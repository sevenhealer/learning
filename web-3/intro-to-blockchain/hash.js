const crypto = require('crypto')
const msg = "seven"
const hash = crypto.createHash('sha256').update(msg).digest('hex')
console.log(hash)


//find a number so that the hash of the number start with 00000
function findHashWithPrefix(prefix){
    let n = 0;
    while(1){
        currentHash = crypto.createHash('sha256').update(n.toString()).digest('hex')
        if(currentHash.startsWith(prefix)){
            return {input: n, hash: currentHash}
        }
        n++;
    }
}

const result = findHashWithPrefix('000000')
console.log(`Hash of ${result.input} is ${result.hash}`)


//Block: Find nonce such that Hash of (data + nonce + prevHash) should start with 00000

function findNonce(data, nonce, prevHash, prefix){
    while(1){
        const dump = {
            data,
            nonce: nonce.toString(),
            prevHash
        }
        const dumpStringfied = JSON.stringify(dump)
        const blockHash = crypto.createHash('sha256').update(dumpStringfied).digest('hex')
        if(blockHash.startsWith(prefix)){
            return {input: dumpStringfied, blockHash}
        }
        nonce++;
    }
}

const data = 'Seven -> Rex | $100, Sera -> Alex | $20'
const nonce = 0;
const prevHash = '0000000000000000000000000000000000000000000000000000000000000000'

const { input, blockHash } = findNonce(data, nonce, prevHash, '00000');
console.log(`Hash of ${input} is ${blockHash}`)