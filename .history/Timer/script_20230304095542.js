function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    setInterval(function () {
        const secondsLeft = (then - Date.now())/1000;
    }, 1000);
    
}

timer(60);
// console.log(timer)