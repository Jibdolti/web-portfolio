function randomizeStartPosition() {
    const elements = document.querySelectorAll('.ballon li, .cloud li');
    elements.forEach(el => {
        el.style.animationDelay = `-${Math.random() * 20}s`;
    });
}

window.addEventListener('load', randomizeStartPosition);

window.addEventListener('load', randomizeStartPosition);

  // 확대/축소 방지 코드
  document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '0')) {
        event.preventDefault();
    }
});

// 페이지 로드 시 기본 배율로 설정
document.body.style.zoom = "100%"; // 일부 브라우저에서 배율을 강제 설정
