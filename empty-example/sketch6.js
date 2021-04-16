let canvasWidth = 500;
let canvasHeight = 500;
let wheel;
let rotateAngle;
let startingAngle;
let increment;
function setup () {
    createCanvas(canvasWidth, canvasHeight);
    wheel = new Wheel();
    rotateAngle = PI / 6;
    startingAngle = PI/6;
    increment = PI / 180;
}

function draw () {
    strokeWeight(12)
    translate(canvasWidth / 2, canvasHeight / 2);
    wheel.draw();
    fill(255)
    if (startingAngle === 2*PI) {
        startingAngle = PI / 6;
    }
    for (let index = 0; index < 12; index++) {
        if(index ===0)
        wheel.drawspokes(startingAngle);
        wheel.drawspokes(rotateAngle)
    }
    startingAngle = startingAngle + increment;

}

class Wheel {

    constructor () {
        this._outerCircleRadius = 400;
        this._innerCircleRadius = 300;
        this._centerCircleRadius = 70;


    }
    draw () {
        let color= [200]
        fill(...color)
        ellipse(0, 0, this._outerCircleRadius, this._outerCircleRadius);
        fill(255)
        ellipse(0, 0, this._innerCircleRadius, this._innerCircleRadius)
        fill(...color)
        ellipse(0, 0, this._centerCircleRadius, this._centerCircleRadius)
    }
    drawspokes (angle) {
        rotate(angle)
        line(this._centerCircleRadius / 2, 0, this._innerCircleRadius / 2, 0)
    }
}