
let circles = [];
let counter = 0;
let increment = 10;
let print = true;
function setup () {
    createCanvas(innerWidth, innerHeight);
    background(204);
    fill(204)

    for (let index = 0; index < 10; index++) {
        circles.push(new Circle())
    }


}

function draw () {
        background(204);

        translate(innerWidth / 2, innerHeight / 2)

        for (let index = 0; index < 10; index++) {
            circles[index].draw(index);
        }
        fill(random(150), (150), 150)
        counter = counter + (increment);
        if (counter > 700) {
            increment = -10
        }
        if (counter < 0) {
            increment = 10
        }
       
}

class Circle {

    constructor () {
        this._width = 100;
        this._height = 100;
    }
    draw (index) {
        let width = this._width +counter;
        let height = this._height +counter;
        ellipse(0, 0, width - 20 * index, height - 20 * index)
    }
}