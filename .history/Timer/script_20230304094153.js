function timer() {
    var time = 60;
    var interval = setInterval(function() {
        time--;
        if (time === 0) {
        clearInterval(interval);
        console.log("Done");
        } else {
        console.log(time);
        }
    }, 1000);
}

timer(60);
console.log(timer)