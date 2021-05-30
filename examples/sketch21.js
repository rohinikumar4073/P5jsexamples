function setup(){
 createCanvas(600,400)
}
function draw(){
    background(204);
 
    let period = 120;
    let amplitude = 100;
    let x = amplitude * cos(2* PI * frameCount / period);
    stroke(0);
    fill(175);
    translate(width/2,height/2);
    //line(0,0,x,0);
    ellipse(x,0,20,20);  
    let y = amplitude * sin(2* PI * frameCount / period);
    stroke(0);
    fill(175);
   // line(0,0,y,0);
   translate(140,0);

    ellipse(y,0,20,20);  
}