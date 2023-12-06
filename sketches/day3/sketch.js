class Grid {
    constructor(centerX, centerY, objSize, gridCount, pointSize) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.objSize = objSize;
        this.gridCount = gridCount;
        this.pointSize = pointSize;
    }
}

class Circle {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.originalX = x;
        this.originalY = y;
        this.attracted = false;
        this.color = color;
    }

    draw() {
        if (this.attracted) {
            const attractionPointX = mouseX;
            const attractionPointY = mouseY;
            const attractionForce = 0.01;

            this.x += (attractionPointX - this.x) * attractionForce;
            this.y += (attractionPointY - this.y) * attractionForce;
            // this.size += (50 - this.size) * 0.15;
        } else {
            this.x -= (this.originalX - this.x) * 0.03;
            this.y -= (this.originalY - this.y) * 0.03;
            // this.size += (20 - this.size) * 0.15;
        }

        fill(this.color);
        noStroke();
        circle(this.x, this.y, this.size);
    }
}



let grid;
let circles = [];



window.setup = function () {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    const sceneSize = min(width, height);
    const centerX = width / 2;
    const centerY = height / 2;
    const objSize = sceneSize / 2;
    const halfWidth = objSize / tan(60);
    const strokeW = 20;

    grid = new Grid(centerX, centerY, objSize, 5, strokeW);

    for (let x = 0; x < grid.gridCount; x++) {
        for (let y = 0; y < grid.gridCount; y++) {
            const xPos = map(
                x,
                0,
                grid.gridCount - 1,
                grid.centerX - grid.objSize / 2,
                grid.centerX + grid.objSize / 2,
                x
            );
            const yPos = map(
                y,
                0,
                grid.gridCount - 1,
                grid.centerY - grid.objSize / 2,
                grid.centerY + grid.objSize / 2,
                y
            );
            circles.push(new Circle(xPos, yPos, strokeW, color(0)));
        }
    }
};

window.windowResized = function () {
    resizeCanvas(windowWidth, windowHeight);
};

window.draw = function () {
    background(255);

    circles.forEach((circle) => circle.draw());

        circles[2].color = color(255,0,0)
        circles[10].color = color(255,0,0)
       
        circles[12].color = color(255,0,0)
      
        circles[14].color = color(255,0,0)
   
        circles[22].color = color(255,0,0)

    let attractionDistance = 100;

    circles.forEach((circle) => {
        const distance = dist(circle.originalX, circle.originalY, mouseX, mouseY);
        const distance2 = dist(circle.x, circle.y, circle.originalX, circle.originalY)
        if (distance < attractionDistance && distance2 < attractionDistance) {
            circle.attracted = true;
        } else {
            circle.attracted = false;
        }
        circles[2].attracted = false
      
        circles[10].attracted = false

        circles[12].attracted = false
   
        circles[14].attracted = false
       
        circles[22].attracted = false
    });

    // Check if circles are outside the screen
    let outsideCircles = [0, 1, 3, 4, 5, 6, 8, 9, 15, 16, 18, 19, 10, 21, 23, 24];
    let allOutside = true;
    for (let i = 0; i < outsideCircles.length; i++) {
        let index = outsideCircles[i];
        if (circles[index].x >= width || circles[index].x <= 0 || circles[index].y >= height || circles[index].y <= 0) {
            allOutside = false;
            break;
        }
    }

    // Draw red rect in the center of the screen if all circles are outside
    if (!allOutside) {
        // fill(255, 0, 0);
        // rectMode(CENTER);
        // rect(width / 2, height / 2, 100, 100);
    }
};
