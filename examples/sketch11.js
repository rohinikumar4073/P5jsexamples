let movers = [];
function setup () {
    createCanvas(600, 400);
    background(204);
    for (let i = 0; i < 10; i++) {
        movers.push(new Mover());
    }
}

function draw () {
    background(204);

    for (let i = 0; i < 10; i++) {
        let mover = movers[i];
        let wind = createVector(0.01, 0);
        mover.applyForce(wind);
        mover.update();
        let gravity = createVector(0, 0.1);
        mover.applyForce(gravity);
        mover.update();
        mover.display();
        mover.checkEdges();
    }

}

class Mover {

    constructor () {
        this._location = createVector(random(500), random(300));
        this._velocity = createVector(0, 0);
        this._acceleration = createVector(0, 0);
        this._mass = random(2);
        this._fill = (random(175));

    }
    applyForce (force) {
        this._acceleration = force.div(this._mass);
    }
    update () {
        this._velocity.add(this._acceleration);
        this._location.add(this._velocity);
        this._acceleration.mult(0);
    }
    display () {
        let { x, y } = this._location;
        stroke(0);
        fill(this._fill);
        ellipse(x, y, this._mass * 30, this._mass * 30);
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