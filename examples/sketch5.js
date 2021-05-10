let petals = [];
let angle;
let colors = []
function setup () {
    angle = PI / 720;
    createCanvas(innerWidth, innerHeight);
    for (let index = 0; index < 12; index++) {
        petals.push(new Petal());
        colors.push([random(255), random(255), 255])
    }
}

function draw () {
    background(204)
    translate(innerWidth / 2, innerHeight / 2);
    angle = angle + PI / 720;
    if (angle ===   PI) {
        angle = PI / 720;
    }

    for (let index = 0; index < 12; index++) {
        fill(...colors[index]);
        petals[index].render(angle);
    }
}

class Petal {
    constructor () {
        this._width = 100;
        this._height = 100;
    }
    render (angle) {
        rotate(angle);
        rect(0, 0, this._width, this._height);
    }
}