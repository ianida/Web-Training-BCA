function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    setInterval(f);
    console.log(now, then);
}

timer(60);
// console.log(timer)