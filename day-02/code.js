const fs = require("fs")
const course = fs.readFileSync("./input.txt").toString().split("\n")

// Parsing Course
// forward X => course[i + X]
// down X => currentDepth + X
// up X => currentDepth - X

const position = {
    horizontal : 0,
    depth : 0,
    aim: 0
}
// create a function to parse current instruction from course
const command = (inst) => cmd = inst.split(" ")

for(let i = 0; i < course.length; i++){
    const path = command(course[i])
    switch (path[0]) {
        case 'forward':
            position.horizontal += parseInt(path[1])
            position.depth += position.aim * parseInt(path[1])
            break;
        case 'up':
            position.aim -= parseInt(path[1])
            break;
        case 'down':
            position.aim += parseInt(path[1])
            break;
        default:
            break;
    }
}

console.log(position)
console.log(position.horizontal * position.depth)