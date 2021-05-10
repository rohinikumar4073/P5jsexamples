
let strokeColor;
let strokeWidth
function setup () {
    createCanvas(innerWidth, innerHeight);
    strokeWidth = 4;
}

function draw () {
    choice = random(1);
    strokeColor =105;
    translate(100, 100);
    background(204);
    let firstPillar = new Pillar();
    firstPillar.draw(50, 50);
    let secondPillar = new Pillar();
    secondPillar.draw(350, 50);
    let pillarStand = new PillarStand();
    pillarStand.draw(20, 500);
    let pillarStand2 = new PillarStand();
    pillarStand2.draw(320, 500);
    let pillarStand3 = new PillarStandTop();
    pillarStand3.draw(20, 30);
    let pillarStand4 = new PillarStandTop();
    pillarStand4.draw(320, 30);
    let roof = new Roof();
    roof.draw()

}


class Pillar {
    constructor () {
        this._width = 75;
        this._height = 500
    }

    draw (x, y) {
        strokeWeight(strokeWidth);
        stroke(strokeColor)
        fill(strokeColor)
        rect(x, y, this._width, this._height, 10, 10);
    }
}

class PillarStand {
    constructor () {
        this._yOffset = 40;
    }

    draw (x, y) {
        strokeWeight(strokeWidth);
        stroke(strokeColor)
        fill(strokeColor)
        strokeJoin(ROUND);
        y = y + this._yOffset;
        quad(x, y,
            x + 130, y,
            x + 140, y + 30,
            x - 10, y + 30);
        rect(x - 10, y + 30, 150, 40)
    }
}
class PillarStandTop {
    constructor () {
        this._yOffset = 70;
    }

    draw (x, y) {
        strokeWeight(strokeWidth);
        stroke(strokeColor);
        fill(strokeColor)
        strokeJoin(ROUND);
        rect(x - 10, y + 30, 150, 40)
        y = y + this._yOffset;
        quad(x - 10, y,
            x + 140, y,
            x + 130, y + 30,
            x, y + 30);
    }
}

class Roof {
   
    draw () {
        fill(strokeColor)
        strokeJoin(ROUND);
        strokeWeight(strokeWidth);
        stroke(strokeColor)
        rect(50, -10, 380, 40, 10)
        quad(10, 10,
            470, 10,
            480, 60,
            0, 60);
    }
}