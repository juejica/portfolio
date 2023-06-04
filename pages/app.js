const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden')

hiddenElements.forEach((el) => observer.observe(el))

// eyes that follow mouse

// position of the mouse
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX
  const mouseY = e.clientY
  // coordinates for the middle of the base image
  const anchor = document.getElementById('anchor')
  const rekt = anchor.getBoundingClientRect()
  const anchorX = rekt.left + rekt.width / 2
  const anchorY = rekt.top + rekt.height / 2

  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)

  // console.log(angleDeg)

  const eyes = document.querySelectorAll('.eye')
  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${90 + angleDeg}deg)`
  })
})

//angle between position of mouse and middle of image
function angle(cx, cy, ex, ey) {
  const dy = ey - cy
  const dx = ex - cx
  const rad = Math.atan2(dy, dx)
  const deg = (rad * 180) / Math.PI
  return deg
}
