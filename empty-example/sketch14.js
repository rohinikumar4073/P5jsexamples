let movers = [];
let xPosition = 10;
function setup () {
    createCanvas(500, 400);
    background(200);
    let liquid = new Liquid();
    for (let index = 0; index < 10; index++) {
        movers.push(new Mover(xPosition, 50, random(30)));
        xPosition = xPosition + 500 / 10;
    }
}
function draw () {
    background(200);

    let liquid = new Liquid(0, 200, 500, 200);
    liquid.draw();
    for (let index = 0; index < 10; index++) {
        let mover = movers[index];
            
        if (!mover.isInLiquid()) {
            mover.drag(liquid);
        }
        let gravity = createVector(0, 0.2);
        mover.applyForce(gravity);
        mover.update();
        mover.draw();
        mover.checkEdges();

    }
}

class Liquid {
    constructor (x1, y1, width, height) {
        this._x1 = x1;
        this._y1 = y1;
        this._width = width;
        this._height = height;
        this.c = 0.05;
    }
    draw () {
        fill(0,0,200);
        noStroke();
        rect(this._x1, this._y1, this._width, this._height);
    }
}
class Mover {
    constructor (x, y, radius) {
        this._radius = radius;
        this._location = createVector(x, y);
        this._velocity = createVector(0, 0);
        this._acceleration = createVector(0, 0);
    }
    applyForce (force) {
        this._acceleration.add(force);
    }
    drag (liquid) {
        let speed = this._velocity.mag();
        let dragMagnitude = liquid.c * speed * speed;
        
        let drag = this._velocity.copy();
        drag.mult(-1);
        drag.normalize();
        drag.mult(dragMagnitude);
        this.applyForce(drag);
    }

    update () {
        this._velocity.add(this._acceleration);
        this._location.add(this._velocity);
        this._acceleration.mult(0);
    }
    isInLiquid () {
        return (this._location.y - this._radius / 2) < 200;

    }
    draw () {
        stroke(255);
        strokeWeight(5);
        fill(255);
        ellipse(this._location.x, this._location.y, this._radius, this._radius);
    }
    isInCanvas () {
        return (this._location.y + this._radius / 2) < height;
    }
    checkEdges () {
        if (this._location.x > width) {
            this._location.x = width;
            this._location.x *= -1;
        } else if (this._location.x < 0) {
            this._velocity.x *= -1;
            this._location.x = 0;
        }
        if (this._location.y > height) {
            this._velocity.y *= -1;
            this._location.y = height;
        }
    }
}