const timeLeft = document.querySelector('.time-left');

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
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    console.log(minutes, seconds);
    timeLeft.textContent = minutes.minutes + ":" + seconds.seconds;
}

timer(70);