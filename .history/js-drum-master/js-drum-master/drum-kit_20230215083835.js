const keys = document.querySelectorAll('.key');

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(1audio) {
        return;
    }
    audio.play();
});