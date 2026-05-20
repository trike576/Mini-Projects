const redButton = document.querySelector('.buttonRed');
const blueButton = document.querySelector('.buttonBlue');
const greenButton = document.querySelector('.buttonGreen');
const yellowButton = document.querySelector('.buttonYellow');

const randomButton = document.querySelector('.buttonRandom');

const bigBox = document.querySelector('.bigBox');

redButton.addEventListener('click', () => {
    bigBox.style.backgroundColor = '#ff0000';
});

blueButton.addEventListener('click', () => {
    bigBox.style.backgroundColor = '#0000ff';
}); 

greenButton.addEventListener('click', () => {
    bigBox.style.backgroundColor = '#00ff00';
});

yellowButton.addEventListener('click', () => {
    bigBox.style.backgroundColor = '#ffff00';
});

randomButton.addEventListener('click', () => {
    let randomColor = '#'
    const hex = '0123456789ABCDEF';
    for(let i = 0; i < 6; i++){
        randomColor += hex[Math.floor(Math.random() * 16)]
    }
    bigBox.style.backgroundColor = randomColor;
})
