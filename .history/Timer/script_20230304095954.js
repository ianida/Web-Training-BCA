function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    setInterval(function () {
        let secondsLeft = (then - Date.now()) / 1000;
        secondsLeft
        console.log(secondsLeft);
    }, 1000);

}

timer(60);
// console.log(timer)