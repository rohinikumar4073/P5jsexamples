let canonBalls = [];
function setup () {
    createCanvas(600, 400);
    background(204);
    for (let index = 0; index < 1; index++) {
        canonBalls.push(new CanonBalls());
    }
}
let applyOnce = true;
function draw () {
    background(204)
    let canon = new Canon();
    canon.draw();
    for (let index = 0; index < 1; index++) {
        let mover = canonBalls[index];
        let wind = createVector(5, -5);
        if (applyOnce) {

            mover.applyForce(wind,PI/180);
            applyOnce = false;
        }
        let gravity = createVector(0, 0.1);
        mover.applyForce(gravity,PI/360);
        mover.draw();
        mover.checkEdges();
    }
}

class Canon {
    constructor () {
        this._location = createVector(width, height);
    }
    draw () {
        push();
        noStroke();
        fill(255, 255, 0);
        translate(20, 370);
        rotate(PI / 3)
        rect(-10, -10, 30, 70, 5);
        pop();

    }
}
class CanonBalls {
    constructor () {
        this._location = createVector(10, 370);
        this._velocity = createVector(0, 0);
        this._acceleration = createVector(0, 0);
        this._angle = 0;
        this._angularVelcotiy = 0;
        this._angularAcceleration = 0;
    }
    applyForce (force, angle) {
        this._acceleration.add(force);
        this._angularAcceleration = this._angularAcceleration + (angle);

    }
    draw () {
        this._velocity.add(this._acceleration);
        this._location.add(this._velocity);
        this._angularVelcotiy = this._angularVelcotiy + (this._angularAcceleration);
        this._angularVelcotiy= constrain(this._angularVelcotiy, -0.1, 0.1 )
        this._angle = this._angle + (this._angularVelcotiy);
        noStroke();
        fill((255), 255, 255);
        rectMode(CENTER);
        push();
        translate(this._location.x, this._location.y);
        rotate(this._angle);
        rect(0,0, 20, 20);
        pop();
        this._acceleration.mult(0);
        this._angularAcceleration = 0;

    }
    checkEdges () {
        if (this._location.x > width || this._location.y > height) {
            this._location = createVector(10, 370);
            applyOnce = true;
            this._velocity = createVector(0, 0);
        }
    }
}