function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    setInterval(function () {
        const secondsLeft=
    }, 1000);
    console.log(now, then);
}

timer(60);
// console.log(timer)