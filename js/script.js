const primaryValue = document.getElementById('primary-value');
const startButton = document.getElementById('start-btn');
const clickButton = document.getElementById('click-btn');

const winScore = 5;
let count = 0;

document.getElementById('start-btn').addEventListener('click', () => {
    //console.log('Start Button Clicked');
    start();
})

document.getElementById('click-btn').addEventListener('click', () => {
    //console.log('Click Button Clicked');
    primaryValue.textContent = count;
})

const start = () => {
    count = 0;
    primaryValue.textContent = count;
    clickButton.removeAttribute('disabled');

    startCounting();
}

const startCounting = () => {
    setTimeout(() => {
        if (isWin()) {
            primaryValue.textContent = 'You Won !';
        }
        else {
            primaryValue.textContent = 'You Lost !';
        }
        clickButton.setAttribute('disabled', true);
    }, 5000);
}

const isWin = () => {
    if (count < winScore) {
        return false;
    }
    else {
        return true;
    }
}