// const images = [
//   'images/one.jpeg',
//   'images/two.jpg',
//   'images/three.jpg',
//   'images/four.jpeg'
// ]

// let currentIndex = 0
// function showImage () {
//   document.getElementById('sliderImage').src = images[currentIndex]
// }
// function nextImage () {
//   showImage()
// }

// function nextImage () {
//   if (currentIndex == images.length - 1) {
//     currentIndex = 0
//   } else {
//     currentIndex++
//   }

//   showImage()
// }
const images = [
  'images/one.jpeg', //0
  'images/two.jpg', //1
  'images/three.jpg',
  'images/four.jpeg',
  'images/one.jpeg', //0
  'images/two.jpg', //1
  'images/three.jpg'
]
let currentIndex = 0
function showImage () {
  document.getElementById('sliderImage').src = images[currentIndex] //images[4]
}
function nextImage () {
  if (currentIndex == images.length - 1) {
    currentIndex = 0
  } else {
    currentIndex++
  }
  showImage()
}
function privious () {
  if (currentIndex == 0) {
    currentIndex = images.length - 1
  } else {
    currentIndex--
  }
  showImage()
}
showImage()
