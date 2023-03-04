
function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    
    setInterval(function () {
        let secondsLeft = (then - Date.now()) / 1000;
        secondsLeft = Math.round(secondsLeft);
        if (secondsLeft <= 0) {
            clearInterval(timer);
        }    
        console.log(secondsLeft)
    }, 1000);

}

timer(10);
// console.log(timer)