const timeLeft = document.querySelector('.time-left');
const timerButton = document.querySelectorAll('[data-time]');

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    displayTimeLeft(seconds);
    let timer = setInterval(function () {
        let secondsLeft = (then - Date.now()) / 1000;
        secondsLeft = Math.round(secondsLeft);
        if (secondsLeft <= 0) {
            clearInterval(timer);
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(secondsLeft) {
    let minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    console.log(minutes, seconds);
    timeLeft.textContent = minutes + ":" + seconds;
}

timerButton.forEach(function(button) {
    button.addEventListener('click',function(event) {
        const minutes = event.target.getAttribute('data-time');
        const seconds = minutes * 60;
        console.log(seconds);
        timer(25);
    });
});