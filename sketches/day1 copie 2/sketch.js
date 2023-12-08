


window.setup = function () {

    createCanvas(windowWidth, windowHeight);

    // angleMode(DEGREES)
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
  
  fill(0);
  const cornerRadii = [0, 0, 0, 0]; // Example corner radii for each corner

  window.drawRoundedSquare(centerX - objSize / 2, centerY - objSize / 2, objSize, cornerRadii);
}

window.drawRoundedSquare = function (x, y, sideLength, cornerRadii) {
  let halfRadius = cornerRadii.map(r => r / 2);
  beginShape();

  // Top-left corner
  vertex(x + halfRadius[0] - cornerRadii[0] / 2, y + cornerRadii[0] / 2);
  arc(x + halfRadius[0], y + halfRadius[0], cornerRadii[0], cornerRadii[0], 360, PI + HALF_PI);
  vertex(x + halfRadius[0], y);

  // Top-right corner
  vertex(x + sideLength - halfRadius[1], y);
  arc(x + sideLength - halfRadius[1], y + halfRadius[1], cornerRadii[1], cornerRadii[1], -HALF_PI, 0);
  vertex(x + sideLength, y + cornerRadii[1] / 2);

  // Bottom-right corner
  vertex(x + sideLength, y + sideLength - halfRadius[2]);
  arc(x + sideLength - halfRadius[2], y + sideLength - halfRadius[2], cornerRadii[2], cornerRadii[2], 0, HALF_PI);
  vertex(x + sideLength - halfRadius[2], y + sideLength);

  // Bottom-left corner
  vertex(x + halfRadius[3], y + sideLength);
  arc(x + halfRadius[3], y + sideLength - halfRadius[3], cornerRadii[3], cornerRadii[3], HALF_PI, PI);
  vertex(x, y + sideLength - halfRadius[3]);

  // Close the shape
  endShape(CLOSE);
}
