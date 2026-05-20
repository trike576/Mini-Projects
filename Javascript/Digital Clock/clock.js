const hourBox  = document.querySelector('.hour')
const minuteBox = document.querySelector('.minute')
const secondBox = document.querySelector('.second')

function updateClock(){
    const now = new Date()
    hourBox.textContent = now.getHours()
    minuteBox.textContent = now.getMinutes()
    secondBox.textContent = now.getSeconds()
}

setInterval(updateClock, 1000)