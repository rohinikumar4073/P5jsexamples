let car;
function setup () {
    createCanvas(600, 400);
    background(204);
    car = new Car();
}

function draw () {
    background(204);
    text('Use keys to navigate', 10, 30);
    textSize(24);

    if (keyIsDown(RIGHT_ARROW)) {
        let force = createVector(0.1, -car.velocity.y);
        car.applyForce(force, 0)
    }
    if (keyIsDown(UP_ARROW)) {
        let force = createVector(-car.velocity.x, -0.1);
        car.applyForce(force, PI / 2);
    }
    if (keyIsDown(DOWN_ARROW)) {
        let force = createVector(-car.velocity.x, 0.1);
        car.applyForce(force, PI / 2);
    }
    if (keyIsDown(LEFT_ARROW)) {
        let force = createVector(-0.1, -car.velocity.y);
        car.applyForce(force, 0);
    }
    car.update();
    car.checkEdges();

}

class Car {
    constructor () {
        this.location = createVector(0, height / 2);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);

    }
    applyForce (force, angle) {
        this.acceleration.add(force);
        this.angle = angle;
    }
    update (angle) {
        fill(0)
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        rectMode(CENTER);
        push();
        translate(this.location.x, this.location.y);
        rotate(this.angle);
        rect(0, 0, 40, 20)
        pop();
        this.acceleration.mult(0);


    }
    checkEdges () {
        if (this.location.x > (width + 40)) {
            this.location.x = 0
        }
        if (this.location.x < (- 40)) {
            this.location.x = width;
        }
        if (this.location.y < -40) {
            this.location.y = (height)
        }
        if (this.location.y > height + 40) {
            this.location.y = 0
        }
    }
}