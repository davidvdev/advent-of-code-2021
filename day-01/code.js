const fs = require("fs")

// create an array that contains all of the input depths
const pings = fs.readFileSync("./input.txt").toString().split("\n")

// Part 1
const logOne = {
    inc: 0,
    dec: 0,
    same: 0
}

for (let i = 0; i < pings.length - 1; i++){
    const j = i+1
    const numI = Number(pings[i])
    const numJ = Number(pings[j])
    if (numI == numJ){
        logOne.same++
    } else if (numI > numJ){
        logOne.dec++
    } else if (numI < numJ){
        logOne.inc++
    }
}

// Part 2
const logTwo = {
    inc: 0,
    dec: 0,
    same: 0
}

for (let i = 0; i < pings.length - 3; i++){
    const j = i+1
    const sumI = Number(pings[i]) + Number(pings[i+1]) + Number(pings[i+2])
    const sumJ = Number(pings[j]) + Number(pings[j+1]) + Number(pings[j+2])

    if (sumI == sumJ){
        logTwo.same++
    } else if (sumI > sumJ){
        logTwo.dec++
    } else if (sumI < sumJ){
        logTwo.inc++
    }
}

console.log('logOne: ', logOne)
console.log('logTwo: ', logTwo)