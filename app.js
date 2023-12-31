const startBtn = document.querySelector('#start');

const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');

});

timeList.addEventListener('click', event => {
    // делегироние событий
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
});

board.addEventListener('click', (event) => {
    if(event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
});

// // DEBUG
// startGame();

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    timeEl.innerHTML = `00:${time}`;

};

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
    if (current < 10) {
        current = `0${current}`
    }

    timeEl.innerHTML = `00:${current}`;
    }
    
}

// function setTime(value) {
//     timeEl.innerHTML = '00:${value}'
// }

function finishGame() {
    // timeEl.parentNode.clasList.add('hide');
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h3> Cчет: <span class="primary"> ${score}</span></h3>`;
};

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);

    // const qqq = board.getBoundingClientRect();
    // console.log(qqq);
    // const x = 150;
    // const y = 200;
    const {width, height} = board.getBoundingClientRect();
    
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size)

   
    circle.classList.add('circle');
    
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`


    board.append(circle)

}


function getRandomNumber(min,max){
   return Math.round(Math.random()*(max-min) + min);
}