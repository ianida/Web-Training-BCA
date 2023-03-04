
function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;


    let timer = setInterval(function () {
        let secondsLeft = (then - (Date.now()-1000)) / 1000;
        secondsLeft = Math.round(secondsLeft);
        if (secondsLeft <= 0) {
            clearInterval(timer);
        }
        console.log(secondsLeft)
    }, 1000);
}

function displayTIimeLeft

timer(10);
// console.log(timer)