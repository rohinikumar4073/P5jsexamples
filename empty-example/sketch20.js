let r = 5;
let theta = 0;

function setup () {
    createCanvas(innerWidth, innerHeight);
    background(204);
}

function draw () {

    if (keyIsDown(RIGHT_ARROW)) {
        background(204);

        let x = r * cos(theta);
        let y = r * sin(theta);
        noStroke();
        fill(0, 0, 0);
        rect(x + width / 2, y + height / 2, 80, 80);

        theta += 0.5;
    }
    if (keyIsDown(LEFT_ARROW)) {
        background(204);
        let x = r * cos(theta);
        let y = r * sin(theta);
        noStroke();
        fill(0, 0, random(255));
        rect(x + width / 2, y + height / 2, 80, 80);
        theta -= 0.5;
    }

}