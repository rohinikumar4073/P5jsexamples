function setup () {
    createCanvas(1000, 1000);
    background(202);

}
var noiseScale = 0.02;

function draw () {
    background(0, 0, 0);

    for (var x = 0; x < width; x++) {
        var noiseVal = noise((mouseX + x) * noiseScale,
            mouseY * noiseScale);
        stroke(noiseVal * 255);
        line(x, mouseY + noiseVal * 80, x, height);
    }
};
