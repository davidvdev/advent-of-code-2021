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

// part 2
// what is the value of gammaArr[0]? keep items from diagnostic that start with that num
// what is the value of gammaArr[1]? keep items from current list that contain that num in position [1]
const oxygenRating = () => {
    // const oxygenArr = diagnostic.filter(num => num[0] == gammaArr[0])
    // .filter(num => num[1] == gammaArr[1])
    // .filter(num => num[2] == gammaArr[2])
    // .filter(num => num[3] == gammaArr[3])
    // .filter(num => num[4] == gammaArr[4])
    // .filter(num => num[5] == gammaArr[5])
    // .filter(num => num[6] == gammaArr[6])
    // .filter(num => num[7] == gammaArr[7])
    // .filter(num => num[8] == gammaArr[8])
    // .filter(num => num[9] == gammaArr[9])
    // .filter(num => num[10] == gammaArr[10])
    // .filter(num => num[11] == gammaArr[11])

    const oxygenArr = []
    // diagnostic.forEach(item =>{
    //     item.forEach((digit, index) => {
    //         switch (digit) {
    //             case gammaArr[index]:
    //                 return true
    //             default:
    //                 return false
    //         }
    //     })
    // })

    console.log('o2: ', oxygenArr)
    return oxygenArr
}

const c02Rating = () => {
    const c02Arr = diagnostic.filter(num => num[0] == epsilonArr[0])
    .filter(num => num[1] == epsilonArr[1])
    .filter(num => num[2] == epsilonArr[2])
    .filter(num => num[3] == epsilonArr[3])
    .filter(num => num[4] == epsilonArr[4])
    .filter(num => num[5] == epsilonArr[5])
    .filter(num => num[6] == epsilonArr[6])
    .filter(num => num[7] == epsilonArr[7])
    .filter(num => num[8] == epsilonArr[8])
    // .filter(num => num[9] == epsilonArr[9])
    // .filter(num => num[10] == epsilonArr[10])
    // .filter(num => num[11] == epsilonArr[11])

    console.log('co2',c02Arr)
    return c02Arr
}

const lifeSupport = parseInt(oxygenRating().join(''), 2) * parseInt(c02Rating().join(''), 2)
console.log(lifeSupport)

