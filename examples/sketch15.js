let m;
let a;

function setup () {
    createCanvas(500, 300);
    a = new Attractor();
    m = new Mover();
}

function draw () {
    background(204);
    let force = a.attract(m)
    a.display();
    m.applyForce(force);
    m.update();
    m.display();



}
let G = 0.01;
class Attractor {
    constructor () {
        this._location = createVector(width / 2, height / 2);
        this._mass = 80;
    }
    display () {
        noStroke();
        fill(125, 200);
        ellipse(this._location.x, this._location.y, this._mass / 2, this._mass / 2,)
    }
    attract (m) {
        let force =  this._location.copy().sub(m._location);
        let dist = force.mag();
        dist = constrain(dist,5,10);
        force.normalize();
        let strength = (G * this._mass * m._mass) / (dist * dist);
        force.mult(strength)
        return force;
    }
}

class Mover {
    constructor () {
        this._location = createVector(50, 50);
        this._mass = 30;
        this._velocity = createVector(0, 0);
        this._acceleration = createVector(0, 0);
    }
    display () {
        noStroke();
        fill(125, 200);
        ellipse(this._location.x, this._location.y, this._mass / 2, this._mass / 2)
    }
    applyForce (force) {
        this._acceleration.add(force);
    }

    update () {
        this._velocity.add(this._acceleration);
        this._location.add(this._velocity);
        this._acceleration.mult(0);
    }
}