import { SpringNumber } from "../../shared/spring.js"

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



let roundness = 1;
let roundness2 = 0;
let roundness3 = 0;
let roundness4 = 0;

let sizeSpring = 0;

window.setup = function () {

    createCanvas(windowWidth, windowHeight);

    angleMode(DEGREES)
}

window.windowResized = function () {
    resizeCanvas(windowWidth, windowHeight);
}

window.mouseClicked = function () {

}


window.draw = function () {
    background(255);
    const sceneSize = min(width, height);
    const centerX = width / 2;
    const centerY = height / 2;
    const objSize = sceneSize / 2;
   


if (mouseIsPressed) {
   Sspring.target = 20
} else {
  Sspring.target = 0
}

if (mouseIsPressed && mouseX < centerX && mouseY < centerY){
   spring.target = 300
}
  
if (mouseIsPressed && mouseX > centerX && mouseY < centerY) {
    spring2.target = 300
}
if (mouseIsPressed && mouseX > centerX && mouseY > centerY) {
    spring3.target = 300
}
if (mouseIsPressed && mouseX < centerX && mouseY > centerY) {
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
    

     

   
}