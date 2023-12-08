import { SpringNumber } from "../../shared/spring.js"



const spring = new SpringNumber({
	position: 0, // start position
	frequency: 1.5, // oscillations per second (approximate)
	halfLife: 0.15 // time until amplitude is halved
})

const spring2 = new SpringNumber({ 
    position: window.innerWidth/2, // start position
    frequency: 1.5, // oscillations per second (approximate)
    halfLife: 0.15 // time until amplitude is halved
})

const spring3 = new SpringNumber({
    position: window.innerHeight/2, // start position
    frequency: 1.5, // oscillations per second (approximate)
    halfLife: 0.15 // time until amplitude is halved
})




let mouseClicked = false    
let shapeId = 0

const positions = []; // Array to store positions
const circles = []; // Array to store circles
let currentIndex = 0;

window.setup = function () {

    createCanvas(windowWidth, windowHeight);

    angleMode(DEGREES)
    const gridCount = 5
    const centerX = width / 2
    const centerY = height / 2
    const objSize = min(width, height) / 2

  

    for (let x = 0; x < gridCount; x++) {
        for (let y = 0; y < gridCount; y++) {
            const xPos = map(x, 0, gridCount - 1, centerX - objSize / 2, centerX + objSize / 2, x)
            const yPos = map(y, 0, gridCount - 1, centerY - objSize / 2, centerY + objSize / 2, y)
            positions.push({ x: xPos, y: yPos }); // Store position in the array
        }
    }

    // console.log(positions); // Print the positions array

}

window.windowResized = function () {
    resizeCanvas(windowWidth, windowHeight);
}

window.mouseClicked = function () {
    mouseClicked = true
 
}

window.draw = function () {


    background(255);
    fill(255,0,0)



    const sceneSize = min(width, height)

   const centerX = width / 2
    const centerY = height / 2
    let objSize = sceneSize / 2
    const strokeW = 20


    switch (shapeId) {
        case 1:


        fill(0)
        noStroke()
        
        const pointSize = strokeW
    
            spring2.target = mouseX
            spring3.target = mouseY
    
        spring2.step(deltaTime / 1000)
        spring3.step(deltaTime / 1000)
    
        const xpos = spring2.position
        const ypos = spring3.position
    
       
    
        let cercle = new Circle(xpos, ypos, pointSize);
        cercle.draw();
  
   

        for (let i = 0; i < positions.length; i++) {
            
            const pos = positions[i];
            const x = pos.x;
            const y = pos.y;
            const distance = dist(x, y, mouseX, mouseY);

            

            

            if (distance < 100) {
               
               

                fill(0);
                noStroke();
                let circle = new Circle(x, y, pointSize);
                 circle.draw();
             
               
          
             circles.push(circle);
            
        }
     }
      

    // Draw all the circles in the array
    for (let i = 0; i < circles.length; i++) {
        circles[i].draw();
      
    }
            break;

        case 0:

    if (mouseIsPressed) {
        spring.target = 20
        
    } else {
        spring.target = objSize
    }


    spring.step(deltaTime / 1000) 

const x = spring.position

if (x >= 19.5 && x <= 20.5) {
    shapeId = 1;
}




    fill(0)
    noStroke()
    circle(centerX, centerY, x);
           
            break;
}

        
}


class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw() {
        circle(this.x, this.y, this.radius);
    }


}

