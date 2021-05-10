let movers = [];
function setup () {
    createCanvas(400, 400);
    background(204);
    for (let i = 0; i < 25; i++) {
        movers.push(new Mover(i));
    }
}

function draw () {
    background(204);

    for (let i = 0; i < 25; i++) {
        let mover = movers[i];
        let wind = createVector(0.05, 0);
        mover.applyForce(wind);
        let gravity = createVector(0, 0.5);
        mover.applyForce(gravity);
        let friction = mover._velocity.copy()
        friction.mult(-1);
        friction.normalize();
        let c = 0.1;
        friction.mult(c);
        mover.applyForce(friction);
        mover.update();
        mover.display();
        mover.checkEdges();
    }

}

class Mover {

    constructor (i) {
        this._location = createVector(0, 0);
        this._velocity = createVector(0, 0);
        this._acceleration = createVector(0, 0);
        this._mass = i + 20;
        this._fill = [random(175),random(175),random(175)];

    }
    applyForce (force) {
        this._acceleration.add(force.div(this._mass));
    }
    update () {
        this._velocity.add(this._acceleration);
        this._location.add(this._velocity);
        this._acceleration.mult(0);
    }
    display () {
        let { x, y } = this._location;
        stroke(0);
        fill(...this._fill);
        ellipse(x, y, this._mass, this._mass );
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