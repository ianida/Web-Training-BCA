const keys = document.querySelectorAll('.key');

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    keys.classL
    if(!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
});