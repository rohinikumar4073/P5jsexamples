this._ellipses = [];
this._ellipsesLocation = [];
this._ellipsesDimension = [];
let velocityVector = [];
let accelerationVector = [];

function setup () {
    createCanvas(innerWidth, innerHeight);
    background(204)
    strokeWeight(5)
    for (let i = 0; i < 10; i++) {
        this._ellipses.push(new Cloud());
        let locationVector = createVector(random(0, innerWidth), random(0, 400));
        let dimensionsVector = createVector(random(300, 400), random(50,150));
        this._ellipsesLocation.push(locationVector);
        this._ellipsesDimension.push(dimensionsVector);
        velocityVector.push(createVector(random(0.1), 0));
        accelerationVector.push(createVector(random(0.5), 0));
    }

}
function draw () {
    background(204)
    stroke(230, 230, 0)
    fill(255, 255, 0);
    rect(150, 200, 250, 350,250)
    for (let i = 0; i < 10; i++) {
        let locationVector = this._ellipsesLocation[i];
        let vVector = velocityVector[i];
        let aVector = accelerationVector[i];
        locationVector.add(vVector);
        let dimensionsVector = this._ellipsesDimension[i];
        if (locationVector.x > innerWidth + 500) {
            locationVector.x = -dimensionsVector.x;
        }
        if (vVector.x < 20) {
            vVector.add(aVector)
        }

        this._ellipses[i].draw(locationVector.x, locationVector.y, dimensionsVector.x, dimensionsVector.y);
    }
}

class Cloud {

    constructor () {

    }
    draw (x, y, width, height) {
        stroke(0, 0, 200);
        fill(0, 0, (255));
        rect(x, y, width, height,150)
    }
}