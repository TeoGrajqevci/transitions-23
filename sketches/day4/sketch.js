
let rotation = 0;
let gravity = 0.1;  
let velocity = 0;   
let position = 0;   
let angle = 0;


window.setup = function () {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
}

window.windowResized = function () {
    resizeCanvas(windowWidth, windowHeight);
}



window.draw = function () {
    background(255);

    const sceneSize = min(width, height);
    const centerX = width / 2;
    const centerY = height / 2;
    const objSize = sceneSize / 2;
    const halfWidth = objSize / tan(60);
    const strokeW = 20;

    fill(0);
    noStroke();
    rectMode(CENTER);
    strokeWeight(strokeW);
    stroke(0);

   

    translate(centerX, centerY);
    rotate(rotation); 
    line(-objSize / 2, 0, objSize / 2, 0);
    line(0, -objSize / 2, 0, objSize / 2);
}