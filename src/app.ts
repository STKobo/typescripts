interface Point {
    x: number 
    y: number 
}

class DimensionPoint implements Point {
    x = 0
    y = 0
}

function draw (p: Point) {

}

draw(new DimensionPoint())