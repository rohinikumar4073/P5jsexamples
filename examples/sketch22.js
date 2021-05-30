let leftLegs = [];
let rightLegs = [];

let loop = 6;
let veloctiy = 0.025;
let limit = 0.5;

let leftLegStart = 7.25;
let rightLegStart = -leftLegStart;
let increment = 0.2;
let leftIncement = 0.1;
function draw () {
    translate(width / 2,leftIncement);
    leftIncement = leftIncement +2;
    if(leftIncement >height+20) {
        leftIncement=0;
    }
    background(221);
    for (let index = 0; index < loop; index++) {
        let leftLeg = leftLegs[index];
        leftLeg.oscillate();
        leftLeg.display();
        leftLeg.reverseVelocity();
        let rightLeg = rightLegs[index];
        rightLeg.oscillate();
        rightLeg.display();
        rightLeg.reverseVelocity();
    }
    fill((200),random(200),200)
    ellipse(0, -10, 30, 25);
    ellipse(0, 10, 25, 25);
    fill((100),random(100),100)


}
function setup () {
    createCanvas(600, 400);
    background(221);
    for (let index = 0; index < loop; index++) {
        leftLegs.push(new RightLeg());

    }
    for (let index = 0; index < loop; index++) {
        rightLegs.push(new LeftLeg());

    }

}


class RightLeg {

    constructor () {
        this.angle = new createVector(leftLegStart, leftLegStart);
        this._initialAngle = this.angle.copy();
        this.velocity = new createVector(veloctiy, veloctiy);
        leftLegStart = leftLegStart + increment;
        this.amplitude = new createVector((width / 10), (height / 10));
    }

    oscillate () {
        this.angle.add(this.velocity);
        
    }
    reverseVelocity () {
        if (this.angle.x > this._initialAngle.x + limit) {
            this.velocity = new createVector(-veloctiy, -veloctiy);

        }
        if (this.angle.x < this._initialAngle.x -limit) {
            this.velocity = new createVector(veloctiy,veloctiy);

        }
    }
    display () {
        let x = sin(this.angle.x) * this.amplitude.x;
        let y = cos(this.angle.y) * this.amplitude.y;

        push();
        stroke(0);
        fill(175);
        line(0, 0, x, y);
        ellipse(x, y, 8, 8);
        pop();
    }
}
class LeftLeg {

    constructor () {
        this.angle = new createVector(rightLegStart, rightLegStart);
        this._initialAngle = this.angle.copy();
        this.velocity = new createVector(-veloctiy, -veloctiy);
        rightLegStart = rightLegStart - increment;
        this.amplitude = new createVector((width / 10), (height / 10));
    }

    oscillate () {
        this.angle.add(this.velocity);
    }
    reverseVelocity () {
        if (this.angle.x > this._initialAngle.x + limit) {
            this.velocity = new createVector(-veloctiy, -veloctiy);

        }
        if (this.angle.x < this._initialAngle.x -limit) {
            this.velocity = new createVector(veloctiy, veloctiy);

        }
    }
    display () {
        let x = sin(this.angle.x) * this.amplitude.x;
        let y = cos(this.angle.y) * this.amplitude.y;

        push();
        stroke(0);
        fill(175);
        line(0, 0, x, y);
        ellipse(x, y, 8, 8);
        pop();
    }
}