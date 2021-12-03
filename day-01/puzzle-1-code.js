const fs = require("fs")

// create an array that contains all of the input depths
const pings = fs.readFileSync("./puzzle-1-input.txt").toString().split("\n")

// create variables to store number of times number increased and decreased
// loop over the array, starting at position 1, checking if the proceeding number is higher or lower
// increment the appropriate variable
const log = {
    inc: 0,
    dec: 0,
    same: 0
}

for (let i = 0; i < pings.length - 1; i++){
    const j = i+1
    if (pings[i] == pings[j]){
        log.same++
    } else if (pings[i] > pings[j]){
        log.dec++
    } else if (pings[i] < pings[j]){
        log.inc++
    }
}

console.log(log)