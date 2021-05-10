
let rects = [];
function setup () {
  createCanvas(500, 500);
  background(204);
  for (let index = 0; index < 6; index++) {
    rects.push(new Rect());
  }
}

function draw () {
  stroke(1)
  strokeWeight(2)
  translate(width/2, height/2)
  for (let index = 0; index < 6; index++) {
    fill(random(150),random(150),random(150))
    rotate(PI/3)
    rects[index].draw(0,0);
  }
}
class Rect {
  constructor () {
    this._width = 200;
    this._height = 50;
  }
  draw (x,y) {
    rect(x,y,this._width, this._height,10)
  }
}
