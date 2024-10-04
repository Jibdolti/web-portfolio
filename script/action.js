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





$(document).ready(function(){
  let sm = 1;    
  $(window).scroll(function(){
      let scrT = $(window).scrollTop();
      let winH = $(window).height();

      $('section').each(function(){
        let secTop = $(this).offset().top;
        
        if(scrT > secTop - winH / 2){
          $(this).addClass('on')
          if(sm == 1){
            typ1()
            sm = 0
          }
        }
      })
      $('#website .rock').each(function(){
        let rockTop = $(this).offset().top;
        
        if(scrT > rockTop - winH / 2){
          $(this).css({transform:'scale(1.1)'})
        } else {
          $(this).css({transform:'scale(1)'})
        }
      })
      // $('body').click(function(event) {
      //   // 클릭한 위치의 좌표를 가져옵니다.
      //   var mouseX = event.pageX;
      //   var mouseY = event.pageY;

      //   // .star_mouse 요소를 클릭한 위치로 이동시킵니다.
      //   $('.star_mouse').css({
      //       left: mouseX + 'px',
      //       top: mouseY + 'px',
      //       position: 'absolute' // 위치를 절대적으로 설정합니다.
      //   });
    // });
  })

  
  function typ1(){
    new TypeIt(".ex", {
        strings:'새로운것을 배우고 <br>모험심이 넘쳐나는 강성민 입니다.',
        speed: 100,
        startDelay: 0
    }).go();
  }
})
$(document).ready(function() {
  // 마우스 위치 변수
  var mouseX = 0;
  var mouseY = 0;

  // 마우스 이동 이벤트
  $(document).mousemove(function(event) {
      mouseX = event.pageX;
      mouseY = event.pageY;
      updateStarMousePosition();
  });

  // 스크롤 이벤트
  $(window).scroll(function() {
      updateStarMousePosition();
  });

  // 마우스 위치 업데이트 함수
  function updateStarMousePosition() {
      $('.star_mouse').css({
          left:0,
          top:0,
          marginLeft:0
      });
      $('.star_mouse figure').css({
          left: mouseX + 'px',
          top: mouseY + 'px'
      });
  }



  // artwork

    $('#artwork .artwork-item').click(function() {
        var docElement = document.documentElement;

        if (docElement.requestFullscreen) {
            docElement.requestFullscreen();
        } else if (docElement.mozRequestFullScreen) { // Firefox
            docElement.mozRequestFullScreen();
        } else if (docElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
            docElement.webkitRequestFullscreen();
        } else if (docElement.msRequestFullscreen) { // IE/Edge
            docElement.msRequestFullscreen();
        }

        $('.banner_view ').show().css({display:'flex'})
        $('.banner_view img').css({marginTop:50}).animate({marginTop:0}, 1000)
        $('body').css({overflow: 'hidden'})


        let artItem = $(this).find('img').attr('src');
        let artItemH2 = $(this).find('img').attr('alt');
        let artItemEx = $(this).attr('data-ex');
        $('.banner_view img').attr('src', artItem);
        $('.banner_view h2').text(artItemH2);
        $('.banner_view p').text(artItemEx);
    });

    $('.banner_view').click(function(){
      document.exitFullscreen();
      $('.banner_view').hide()
      $('body').css({overflow: 'auto'})
    })

    // artgraphic
    $('.graphic-item').click(function(){
      $(this).toggleClass('on')
    })
});

// 페이지 로드 시 실행
window.onload = function() {
  // 방문자 수를 0으로 초기화
  let visitCount = 0;
  
  // localStorage에 초기화된 카운터 값 저장
  localStorage.setItem('visitCount', visitCount);
  
  // 화면에 방문자 수 출력
  document.getElementById('visitorCount').innerText = `방문자 수: ${visitCount}`;
};
