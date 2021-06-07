let ossc = [];
let count = 600;
let x = 0;
let coordiante = 0;
let angeVel = 0.01;
function setup () {
    createCanvas(600, 400);
    for (let index = 0; index < count; index++) {
        ossc.push(new Oscillator());
        x = x + angeVel;
    }
}
function draw () {
    background(204)
    for (let index = 0; index < count; index++) {
        ossc[index].update();

        ossc[index].display();
    }

}

class Oscillator {
    constructor () {
        this._angle = x;
        coordiante = (coordiante + 1);
        this._xcoord = coordiante;
        this._ycoord = sin(this._angle) * (height / 3);

    }
    update () {
        this._angle = this._angle + angeVel;
        this._ycoord = sin(this._angle) * (height / 3);

    }
    display () {
        push();
        stroke(0);
        fill((200), (200), 200);
        translate(0, height / 2);
        ellipse(this._xcoord, this._ycoord, 16, 16);
        pop();
    }
}