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
  // background(255)
}

function keyPressed() {
  clear()
}

// change colour

let red = 0
let green = 0
let blue = 0

function draw() {
  stroke(red, green, blue)
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY)
    strokeWeight(10)
  }
}

function changeToGreen() {
  red = 170
  green = 245
  blue = 66
}

function changeToBlue() {
  red = 66
  green = 173
  blue = 245
}

function changeToRed() {
  red = 245
  green = 66
  blue = 147
}
