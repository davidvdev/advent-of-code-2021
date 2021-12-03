const fs = require("fs")
const diagnostic = fs.readFileSync("./input.txt").toString().split("\n")

const gammaArr = [[],[],[],[],[],[],[],[],[],[],[],[]]
const epsilonArr = []

for(let i = 0; i < diagnostic.length; i++){
    diagnostic[i].split('').forEach((num,index) => gammaArr[index].push(num))
}

for(let i = 0; i < gammaArr.length; i++){
    let count = {
        I: 0,
        O: 0,
        digit: ""
    }
    
    gammaArr[i].forEach(num => {
        switch (num) {
            case '1':
                count.I++
                break;
            case '0':
                count.O++
                break;
            default:
                break;
        }
    })

    gammaArr[i] = count.I > count.O ? '1':'0'
    epsilonArr[i] = gammaArr[i] == '1' ? '0' : '1'
}

const powerUsed = parseInt(gammaArr.join(''), 2) * parseInt(epsilonArr.join(''), 2)

console.log(gammaArr.join(''))
console.log(epsilonArr.join(''))

console.log(powerUsed)