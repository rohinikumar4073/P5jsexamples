let r = 5;
let theta = 0;
 
function setup() {
  createCanvas(innerWidth,innerHeight);
  background(204);
}
 
function draw() {
  let x = r * cos(theta);
  let y = r * sin(theta);
  r = r +0.1;
  noStroke();
  fill(0,0,random(255));
  ellipse(x+width/2, y+height/2, 8, 8);
 
  theta += 0.5;
}