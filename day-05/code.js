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

const partOne = () => {

}

const isOrthoAdj = () => {
    const coords = points[0]
    if (coords[0].x == coords[1].x){
        return('x is equal')
    }
    if (coords[0].y == coords[1].y){
        return('y is equal')
    }
    if (coords[0].x != coords[1].x && coords[0].y != coords[1].y) {
        return(null)
    }  
}

partOne()
console.log(points[0].push(isOrthoAdj()))
console.log(points[0])