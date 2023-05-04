//sketch as background

var canvas

function windowResized() {
  //console.log('resized')
  resizeCanvas(windowWidth, windowHeight)
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
  canvas.position(0, 0)
  canvas.style('z-index', '-1') //puts canvas behind
  background(255)
}

function mousePressed() {
  clear()
}

function draw() {
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY)
    strokeWeight(10)
  }
}
