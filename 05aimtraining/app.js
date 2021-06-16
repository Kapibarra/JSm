const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('.board')
let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
event.preventDefault()
screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
if (event.target.classList.contains('circle') === true) {
    console.log(event.target.classList.contains('circle'));
score++
event.target.remove()
createRandomCircle()
} else {
   score--
    event.target.querySelector('.circle').remove();
    createRandomCircle()
    if(score < 0) {
        timeEl.parentNode.classList.add('hide')
        finishGame()
    }
}
})

function startGame() {
    setInterval(decrementTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decrementTime() {
    if(time === 0) {
finishGame()
    } else {
        let currentTime = --time
        if (currentTime < 10 ) {
            currentTime = `0${currentTime}`
        }
        setTime(currentTime)
        }
    }

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}
function finishGame() {
    if (score < 0 ) {
        board.innerHTML = `<h1>Ну ты и мазила... Счет: <span class="primary">${score}</span><h1>`
        board.removeEventListener('click')
        timeEl.parentNode.classList.add('hide')
    } else {
        board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span><h1>`
        board.removeEventListener('click')
timeEl.parentNode.classList.add('hide')
    }
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomSize(10,60)
    const {width, height} = board.getBoundingClientRect()
    const color = getRandomRgb()
    const x = getRandomSize(0, width - size)
    const y = getRandomSize(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.background = `${color}`
    circle.style.boxShadow = `0 0 5px ${color}`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    board.style.boxShadow = `0px 0px 55px ${color}`
    board.append(circle)
}

function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
function getRandomRgb() {
    const num = Math.round(0xffffff * Math.random());
    const r = num >> 16;
    const g = num >> 8 & 255;
    const b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  
  for (let i = 0; i < SQUARES_NUMBER; i++) {
  }