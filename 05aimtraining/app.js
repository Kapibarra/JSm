const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
let time = 20

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

function startGame() {
    setInterval(decrementTime, 1000)
    setTime(time)
}

function decrementTime() {
    if(time === 0) {
finishGame()
    } else {
        let currentTime = --time
        if (currentTime < 10 ) {
            currentTime = `-${currentTime}`
        }
        setTime(currentTime)
        }
    }

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}
function finishGame() {

}