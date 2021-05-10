
let circles = [];
function setup () {
  createCanvas(500, 500);
  background(204);
  for (let index = 0; index < 50; index++) {
    circles.push(new Circle());
    circles[index].draw(random(width), random(height));

  }
}
function draw () {
  background(204);

  for (let index = 0; index < 50; index++) {
    circles[index].update();
    circles[index].draw();

  }
}
class Circle {
  constructor () {
    let diameter = random(width / 2)
    this._width = diameter;
    this._height = diameter;
    this._x = random(width);
    this._y = random(height);
    this._colors = [
      random(150),
      random(150),
      random(150)
    ];
    this[`xInc`] = true;
    this[`yInc`] = true;


  }
  draw () {
    fill(...this._colors)
    ellipse(this._x, this._y, this._width, this._height)
  }
  _calculate (temp,inc) {
    if (temp > width) {
      this[`${inc}Inc`] = false;
    }
    if (temp < 0) {
      this[`${inc}Inc`]  = true;
    }
    if (this[`${inc}Inc`] ) {
      temp = temp + random(10);
    } else {
      temp = temp - random(10);
    }
    return temp;
  }

  update () {
    this._x = this._calculate(this._x,'x');
    this._y = this._calculate(this._y,'y');
  }
}
