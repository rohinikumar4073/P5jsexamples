let x = 100;
let y = 100;
let xspeed = 1;
let yspeed = 3.3;
 
function setup(){
    createCanvas(500, 200);
    background(204)

}

function draw(){
    background(204)
    x = x + xspeed;
    y = y + yspeed;
  if ((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }
  if ((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
  }

  stroke(0);
  fill(175);
  ellipse(x,y,16,16);
}