let bricks = [];
let yIncrement = -1000;

function setup () {
    createCanvas( innerWidth,innerHeight);
    background(204);
    fill(204)


}

function draw () {

    for (let j = 0; j < 150; j++) {
        let xIncrement = random(-500);
        for (let index = 0; index < 150; index++) {
            let brick = new Brick()
            bricks.push(brick);
            let width= random(100);
            brick.draw(xIncrement, yIncrement,width);
            xIncrement = xIncrement + width;
        }
        yIncrement = yIncrement + 60;
    }
}

class Brick {
    constructor () {
        this._width = 100;
        this._height = 60;
    }
    draw (x,y,width) {
        strokeWeight(10)
        strokeJoin(ROUND); 
        fill(100,random(200),100)
        rect(x, y, width, this._height)
    }
}