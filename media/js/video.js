$(document).ready(function() {
  var screenSize, screenHeight;
  var current=false;

  function screen_size(){
      screenSize = $(window).width(); //스크린의 너비
      screenHeight = $(window).height();  //스크린의 높이

      $("#content").css('margin-top',screenHeight);
      
      if( screenSize > 768 && current==false){
          $("#videoBG").show();
          $("#videoBG").attr('src','./images/back.mp4');
          $("#imgBG").hide();
          current=true;
        }
      if(screenSize <= 768){
          $("#videoBG").hide();
          $("#videoBG").attr('src','');
          $("#imgBG").show();
          current=false;
      }
  }

  screen_size();  //최초 실행시 호출
  
 $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screen_size();
  }); 
  
  $('.down').click(function(e){
      e.preventDefault();
      screenHeight = $(window).height();
      $('html,body').animate({'scrollTop':screenHeight}, 1000);
  });
  
});

 // 스크롤처리
 var visual_height = $(window).height()-80; // 500
 $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
   var scroll = $(window).scrollTop(); //스크롤의 거리

   if(scroll>visual_height){ //500이상의 거리가 발생되면
       $('#headerArea').css('background','#000').css('box-shadow', '1px 1px 10px 1px rgba(0,0,0,.4)');  //top보여라~~~~
   }else{
       $('#headerArea').css('background','none').css('box-shadow', '1px 1px 10px 1px rgba(0,0,0,0)');//top안보여라~~~~
   }
 });

