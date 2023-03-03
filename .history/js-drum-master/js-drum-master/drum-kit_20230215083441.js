const keys = document.querySelectorAll('.key');

window.addEventListener('keydown', function() {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.play()
});