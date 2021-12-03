const fs = require("fs")

// create an array that contains all of the input depths
const pings = fs.readFileSync("./puzzle-1-input.txt").toString().split("\n")

const log = {
    inc: 0,
    dec: 0,
    same: 0
}

for (let i = 0; i < pings.length - 1; i++){
    const j = i+1
    const numI = Number(pings[i])
    const numJ = Number(pings[j])
    if (numI == numJ){
        log.same++
    } else if (numI > numJ){
        log.dec++
    } else if (numI < numJ){
        log.inc++
    }
}

console.log(log)