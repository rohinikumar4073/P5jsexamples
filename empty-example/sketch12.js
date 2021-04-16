let ballon;
function setup () {
    // Create a Ballon
    // Create an Ellipse
    // Create an Thread
    createCanvas(innerWidth, innerHeight);
    ballon = new Balloon();
}
let i = 0;

function draw () {
    background(204);
    ballon.move(i);
    ballon.draw();
    i = i + .01;

}

class Balloon {
    constructor () {

    }
    draw () {
        stroke(255, 0, 0);
        strokeWeight(5);
        fill(255, 0, 0)
        //line(-2,110,-2,150);
        strokeWeight(14);
        ellipse(0, 0, 170, 200, 30)
        rotate(PI / 6)
        polygon(55, 95, 10, 3);

    }
    move (x) {
        translate(width * noise(x), 120 );
    }
}
function polygon (x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    strokeJoin(ROUND)
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}