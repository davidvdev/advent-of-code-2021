const fs = require("fs")
const data = fs.readFileSync("./input.txt").toString().split("\n")

// array of number-strings
const numbers = data[0].split(",")

const boardsUnOrg = data.filter(line => line.length > 1 && line.length < 15)

const boards = []

for (let i = 0; i < boardsUnOrg.length; i += 5){
    boards.push(
        [boardsUnOrg[i], 
        boardsUnOrg[i + 1],
        boardsUnOrg[i + 2],
        boardsUnOrg[i + 3],
        boardsUnOrg[i + 4]
    ])
}
    // array method that works in 5 step increments
    // group 5 rows together to form a board
    // boardsUnOrg = []
    

console.log(numbers)
console.log(boards)
console.log(collection)