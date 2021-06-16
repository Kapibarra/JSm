const board = document.querySelector('#board')
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
const square = document.createElement('div')
square.classList.add('square')

square.addEventListener('mouseover', () => setColor(square))
square.addEventListener('mouseleave', () => removeColor(square))

board.append(square)
}
function setColor(element) {
    const container = document.querySelector('.container')
    const color = getRandomRgb()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    container.style.boxShadow = `0 0 12px ${color}, 0 0 20px ${color}`
}
function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomRgb() {
    const num = Math.round(0xffffff * Math.random());
    const r = num >> 16;
    const g = num >> 8 & 255;
    const b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  
  for (let i = 0; i < SQUARES_NUMBER; i++) {
    console.log(getRandomRgb());
  }