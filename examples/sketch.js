let fanspokes = [];
let angle = 0;

function setup () {
  createCanvas(1000, 1000);
  background(204);

}
let rotateAngle = 0;

function draw () {
  translate(1000 / 2, 1000 / 2);
  rotateAngle = rotateAngle + PI / 4;
  background(204);
  for (let i = 0; i < 20; i++) {
    angle = rotateAngle + angle + 2 * PI / 3;
    rotate(angle)
    fanspokes.push(new FanSpoke());
  }


}
class FanSpoke {
  constructor () {
    this._draw();
  }
  _draw () {
    strokeWeight(5);
    strokeJoin(ROUND);
    quad(158, 55, 199, 14, 362, 66, 341, 107);

  }
}
