function draw () {
    background(204)
    for (let index = 0; index < 100; index++) {
        let gravity = createVector(0,0.1);
        rainsDrops[index].applyForce(gravity);
        rainsDrops[index].update();
        rainsDrops[index].checkEdges();
    }
}
let rainsDrops =[];
function setup () {
    createCanvas(600,400);
    for (let index = 0; index < 100; index++) {
        rainsDrops.push( new RainDrops());
    }
}

class RainDrops {
    constructor () {
        this._mass = random(10,50);
        this._velocity = createVector(0,0);
        this._location = createVector(random(width),random(height));
        this._acceleration = createVector(0,0);
        this._fillColor = [(255),(255),(255)]
    }
    applyForce(force){
        force.mult(this._mass*0.1 );
        this._acceleration.add(force );
    }
    update(){
        this._velocity.add(this._acceleration);
        this._location.add(this._velocity);
        fill(...this._fillColor);
        noStroke();
        ellipse(this._location.x, this._location.y,2,this._mass);
        this._acceleration.mult(0);
    }
    checkEdges(){
        if(this._location.y > height){
            this._location.y = -this._mass;
            this._velocity = createVector(0,0);

        }
    }
}