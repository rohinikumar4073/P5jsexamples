let p;
function setup () {
    createCanvas(640, 360);
    p = new Pendulum(new createVector(width / 2, 10), 125);
}
function draw () {
    background(204);
    p.go();

}



class Pendulum {
    // Arbitrary damping amount

    constructor (origin, r) {
        this.origin = origin.copy();
        this.location = new createVector();
        this.r = r;
        this.angle = PI / 4;
        this.aVelocity = 0.0;
        this.aAcceleration = 0.0;
        this.damping = 0.995;
    }

    go () {
        this.update();
        this.display();
    }

    update () {
        let gravity = 0.4;
        this.aAcceleration = (-1 * gravity / this.r) * sin(this.angle);
        this.aVelocity += this.aAcceleration;
        this.angle += this.aVelocity;
        this.aVelocity *= this.damping;
    }

    display () {
        this.location.set(this.r * sin(this.angle), this.r * cos(this.angle), 0);
        this.location.add(this.origin);
        stroke(0);
        line(this.origin.x, this.origin.y, this.location.x, this.location.y);
        fill(175);
        ellipse(this.location.x, this.location.y, 16, 16);
    }
}