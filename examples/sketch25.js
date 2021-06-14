function setup () {

    createCanvas(900, 600);
    background(204);
    triangle(width / 2, height / 2, r * sin(PI / 3), height / 2, r * sin(PI / 3), r * cos(PI / 3));
}
let r = 100;
let x = 30;
let y = 50;
let velocity = 0.25;
acc = 0.05;

function draw () {
    r = r + 1 + velocity;
    let force = velocity + acc
    velocity = force;
    background(204);
    triangle(width / 2, height / 2, 100 * sin(PI / 3), height / 2, 100 * sin(PI / 3), 100 * cos(PI / 3));
    push();
    let x = r * sin(PI / 3 - 4 * PI / 180);
    let y = r * cos(PI / 3 - 4 * PI / 180) - 30;
    translate(x, y)
    rotate(PI / 2 - PI / 3 + 4 * PI / 180)
    rect(0, 0, 70, 20);
    pop();
    if (x > width / 2) {
        r = 100;
         velocity = 0.25;

    }


}

