function randomizeStartPosition() {
    const elements = document.querySelectorAll('.ballon li, .cloud li');
    elements.forEach(el => {
        el.style.animationDelay = `-${Math.random() * 20}s`;
    });
}

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


$(window).scroll(function(){
    let scrT = $(window).scrollTop();
    // $('.star').css({})
      // 나누기 연산으로 스크롤 단계 결정 (1000px씩)
      var phase = Math.floor(scrT / 1000);
      
      // 각도 계산
      var angle = scrT % 1000;

      // 시계 방향 회전 또는 반시계 방향 회전
      if (phase % 2 === 0) {
        $('.star0 .left').css('transform', 'rotate(' + angle + 'deg)');
      } else {
        $('.star0 .left').css('transform', 'rotate(-' + angle + 'deg)');
      }
})