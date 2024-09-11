function randomizeStartPosition() {
    const elements = document.querySelectorAll('.ballon li, .cloud li');
    elements.forEach(el => {
        el.style.animationDelay = `-${Math.random() * 20}s`;
    });
}

window.addEventListener('load', randomizeStartPosition);
