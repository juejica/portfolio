//sketch as background

var canvas

//window will resize to the width and height of the window
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

//pressing a key will clear the canvas
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
    strokeWeight(8)
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

function changeToBlack() {
  red = 0
  green = 0
  blue = 0
}
