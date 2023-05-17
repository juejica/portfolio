//sketch as background

let canvas

//window will resize to the width and height of the window

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
  canvas.style('z-index', '-1') //puts canvas behind
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

// eyes that follow mouse

// position of the mouse
// document.addEventListener('mousemove', (e) => {
//   const mouseX = e.clientX
//   const mouseY = e.clientY
//   // coordinates for the middle of the base image
//   const anchor = document.getElementById('anchor')
//   const rekt = anchor.getBoundingClientRect()
//   const anchorX = rekt.left + rekt.width / 2
//   const anchorY = rekt.top + rekt.height / 2

//   const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)

//   // console.log(angleDeg)

//   const eyes = document.querySelectorAll('.eye')
//   eyes.forEach((eye) => {
//     eye.style.transform = `rotate(${90 + angleDeg}deg)`
//   })
// })

// //angle between position of mouse and middle of image
// function angle(cx, cy, ex, ey) {
//   const dy = ey - cy
//   const dx = ex - cx
//   const rad = Math.atan2(dy, dx)
//   const deg = (rad * 180) / Math.PI
//   return deg
// }

// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'

// //Setup
// const scene = new THREE.Scene()
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// )

// const renderer = new THREE.WebGLRenderer()
// renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)

// const orbit = new OrbitControls(camera, renderer.domElement)
// camera.position.set(0, 20, 100)
// orbit.update()

// const hdrLoader = new RGBELoader()

// hdrLoader.load(
//   '../assets/little_paris_eiffel_tower_4k.hdr',
//   function (texture) {
//     texture.mapping = THREE.EquirectangularReflectionMapping
//     scene.background = texture
//     scene.environment = texture
//   }
// )

//----------Keep at the bottom of this file----------//
//Animate loop
// function animate() {
//   requestAnimationFrame(animate)
//   cube.rotation.y += 0.01
//   cube.rotation.x += 0.01

//   renderer.render(scene, camera)
// }

// //Window resize
// window.addEventListener('resize', function () {
//   camera.aspect = window.innerWidth / window.innerHeight
//   camera.updateProjectionMatrix()
//   renderer.setSize(window.innerWidth, window.innerHeight)
// })

// animate()
