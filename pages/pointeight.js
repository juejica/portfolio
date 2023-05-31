//sketch as background

var canvas

//window will resize to the width and height of the window
// function windowResized() {
//   //console.log('resized')
//   resizeCanvas(windowWidth, windowHeight)
// }

// function setup() {
//   canvas = createCanvas(windowWidth, windowHeight)
//   canvas.position(0, 0)
//   canvas.style('z-index', '-1') //puts canvas behind
//   // background(255)
// }

function setup() {
  let h = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  )
  console.log(h)
  console.log(document.body.scrollHeight)
  console.log(windowHeight)
  canvas = createCanvas(windowWidth, h)
  canvas.position(0, 0)
  canvas.style('z-index', '1') //puts canvas behind
  // background(255)
}

function windowResized() {
  let h = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  )
  // console.log('resized')
  resizeCanvas(windowWidth, h)
}

//pressing a key will clear the canvas
function keyPressed() {
  clear()
}

// change colour
let red = 255
let green = 133
let blue = 113

function draw() {
  stroke(red, green, blue)
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY)
    strokeWeight(8)
  }
}

function changeToBlue() {
  red = 109
  green = 203
  blue = 243
}

function changeToPurple() {
  red = 227
  green = 186
  blue = 255
}

function changeToSalmon() {
  red = 255
  green = 133
  blue = 113
}

function changeToGreen() {
  red = 113
  green = 189
  blue = 53
}

// function changeToBlack() {
//   red = 0
//   green = 0
//   blue = 0
// }

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden')

hiddenElements.forEach((el) => observer.observe(el))
