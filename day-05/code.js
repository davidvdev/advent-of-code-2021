const fs = require("fs")
const data = fs.readFileSync("./input.txt").toString().split("\n")
const points = data.map(line =>{
    const coordLine = line.split(' -> ').map(coords => {
        const point = coords.split(',')
        return {
            x: parseInt(point[0]),
            y: parseInt(point[1])
        }
    })
    return coordLine
})

console.log(points)