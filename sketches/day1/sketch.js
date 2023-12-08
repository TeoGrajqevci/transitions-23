import { SpringNumber } from "../../shared/spring.js"
import { sendSequenceNextSignal } from "../../shared/sequenceRunner.js"

const spring = new SpringNumber({
   
	position: 0, // start position
	frequency: 4.5, // oscillations per second (approximate)
	halfLife: 0.15 // time until amplitude is halved
})

const spring2 = new SpringNumber({
   
	position: 0, // start position
	frequency: 4.5, // oscillations per second (approximate)
	halfLife: 0.15 // time until amplitude is halved
})
const spring3 = new SpringNumber({
   
	position: 0, // start position
	frequency: 4.5, // oscillations per second (approximate)
	halfLife: 0.15 // time until amplitude is halved
})
const spring4 = new SpringNumber({
   
	position: 0, // start position
	frequency: 4.5, // oscillations per second (approximate)
	halfLife: 0.15 // time until amplitude is halved
})

const Sspring = new SpringNumber({
   
  position: 0, // start position
  frequency: 2, // oscillations per second (approximate)
  halfLife: 2 // time until amplitude is halved
})


let roundness = 0;
let roundness2 = 0;
let roundness3 = 0;
let roundness4 = 0;

let sizeSpring = 0;


let isSquared = true;

let rectVertices = [];
let originalPositions = [];
let selectedVertex = -1;
let resetTimeout = null;

let pop;
let woosh

window.preload = function () {
    pop = loadSound('click.mp3')
    woosh = loadSound('woosh.mp3')
}

window.setup = function () {

    createCanvas(windowWidth, windowHeight);

    const sceneSize = min(width, height)
    const centerX = width / 2;
    const centerY = height / 2;
    const objSize = sceneSize / 2


    rectVertices.push(createVector(centerX - objSize  / 2, centerY - objSize  / 2));
    rectVertices.push(createVector(centerX , centerY - objSize  / 2+10));
    rectVertices.push(createVector(centerX + objSize  / 2, centerY - objSize/2));
    rectVertices.push(createVector(centerX + objSize  / 2 - 10, centerY));
    rectVertices.push(createVector(centerX + objSize  / 2, centerY + objSize  / 2));
    rectVertices.push(createVector(centerX , centerY + objSize  / 2 - 10));
    rectVertices.push(createVector(centerX - objSize  / 2, centerY + objSize  / 2));
    rectVertices.push(createVector(centerX - objSize  / 2 +10, centerY));


    for (let i = 0; i < rectVertices.length; i++) {
        originalPositions.push(rectVertices[i].copy());
      }



    angleMode(DEGREES)
}

window.windowResized = function () {
    resizeCanvas(windowWidth, windowHeight);
}



window.mousePressed = function () {
  for (let i = 0; i < rectVertices.length; i++) {
      let d = dist(mouseX, mouseY, rectVertices[i].x, rectVertices[i].y);
      if (d < 150) {
        pop.play()
        selectedVertex = i;
    }
  }
  
}

window.mouseReleased = function () {
  isSquared = !isSquared;
 
  woosh.play()

  if (selectedVertex !== -1) {

      // Reset the selected vertex to a position 100 pixels towards the center
      const centerX = width / 2;
      const centerY = height / 2;

      const originalX = originalPositions[selectedVertex].x;
      const originalY = originalPositions[selectedVertex].y;

      const dx = centerX - originalX;
      const dy = centerY - originalY;

      rectVertices[selectedVertex].x = originalX + dx - 200 * (dx / dist(originalX, originalY, centerX, centerY));
      rectVertices[selectedVertex].y = originalY + dy - 200 * (dy / dist(originalX, originalY, centerX, centerY));

      selectedVertex = -1;
  }
  
  if (resetTimeout !== null) {
      clearTimeout(resetTimeout);
  }
  resetTimeout = setTimeout(function () {
    isSquared = !isSquared;
  }, 60);



}



window.draw = function () {
    background(255);

    const sceneSize = min(width, height);
    const centerX = width / 2;
    const centerY = height / 2;
    const objSize = sceneSize / 2;



if (!isSquared) {
   Sspring.target = 20
} else {
  Sspring.target = 0
}

if (!isSquared && mouseX < centerX && mouseY < centerY){
   spring.target = 300
}
  
if (!isSquared && mouseX > centerX && mouseY < centerY) {
    spring2.target = 300
}
if (!isSquared && mouseX > centerX && mouseY > centerY) {
    spring3.target = 300
}
if (!isSquared && mouseX < centerX && mouseY > centerY) {
    spring4.target = 300
}

spring.step(deltaTime / 1000)
spring2.step(deltaTime / 1000)
spring3.step(deltaTime / 1000)
spring4.step(deltaTime / 1000)
Sspring.step(deltaTime / 1000)


const roundness = spring.position
const roundness2 = spring2.position
const roundness3 = spring3.position
const roundness4 = spring4.position

const sizeSpring = Sspring.position




            fill(0);
            noStroke();
            rectMode(CENTER);
            rect(centerX, centerY, objSize+sizeSpring, objSize+sizeSpring,roundness,roundness2,roundness3,roundness4);
    

            if(roundness >= 300 && roundness2 >= 300 && roundness3 >= 300 && roundness4 >= 300){
setTimeout(function () {
    sendSequenceNextSignal()
}, 1000);

            }
   
   
  
  

    fill(0);
    noStroke();
    rectMode(CENTER);

    beginShape();
    for (let i = 0; i < rectVertices.length; i++) {
      vertex(rectVertices[i].x, rectVertices[i].y);
    }
    endShape(CLOSE);

    if (selectedVertex !== -1) {
        rectVertices[selectedVertex].x = mouseX;
        rectVertices[selectedVertex].y = mouseY;
      }

    }
