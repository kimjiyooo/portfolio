
$(document).ready(function() {

   var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
   var on_off=false;  //false(안오버)  true(오버)
   
       $('#headerArea').mouseenter(function(){
          // var scroll = $(window).scrollTop();
           $(this).css('background','#fff');
           $('.dropdownmenu li a.depth1').css('color','#333');
           $('.top_menu a').css('color','#333');
           $('.logo a').css('background','url(https://kjy990417.cafe24.com/common/images/logo_02.png)'); 
          // 헤더 영역의 텍스트 색상과 로고이미지 경로 등을 교체
           on_off=true;
       });
   
      $('#headerArea').mouseleave(function(){
           var scroll = $(window).scrollTop();  //스크롤의 거리
           
           if(scroll<smh-50 ){
               $(this).css('background','none').css('border-bottom','none'); 
               $('.dropdownmenu li a.depth1').css('color','#fff');
               $('.top_menu a').css('color','#fff');
               $('.logo a').css('background','url(https://kjy990417.cafe24.com/common/images/logo_01.png)');
           }else{
               $(this).css('background','#fff'); 
               $('.dropdownmenu li a.depth1').css('color','#333');
               $('.top_menu a').css('color','#333');
               $('.logo a').css('background','url(https://kjy990417.cafe24.com/common/images/logo_02.png)');
           }
          on_off=false;    
      });
   
      $(window).on('scroll',function(){//스크롤의 거리가 발생하면
           var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
           //console.log(scroll);

           if(scroll>smh-50){//스크롤이 비주얼의 높이-header높이까지 내리면 
               $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
               $('.dropdownmenu li a.depth1').css('color','#333');
               $('.top_menu a').css('color','#333');
               $('.logo a').css('background','url(https://kjy990417.cafe24.com/common/images/logo_02.png)');
           }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
              if(on_off==false){
                   $('#headerArea').css('background','none').css('border-bottom','none');
                   $('.dropdownmenu li a.depth1').css('color','#fff');
                   $('.top_menu a').css('color','#fff');
                   $('.logo a').css('background','url(https://kjy990417.cafe24.com/common/images/logo_01.png)');
              }
           }; 
           
        });

  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:300},'fast').clearQueue();
       },function() {
          $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:135},'fast').clearQueue();
     });
    
     //1depth 효과
     $('ul.dropdownmenu li.menu').hover(
       function() { 
            $('.depth1',this).css('color','#11acd1');
       },function() {
          $('.depth1',this).css('color','#333');
     });
     

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:300},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:135},'normal').clearQueue();
    });

    // 상단 이동 메뉴 스크롤 처리
    $(window).on('scroll',function(){ 
        var scroll = $(window).scrollTop(); 
        if(scroll>1500){ 
            $('.top_move').fadeIn('slow'); 
        }else{
            $('.top_move').fadeOut('slow');
        }
    });
    $('.top_move').click(function(e){
        e.preventDefault();
        $("html,body").stop().animate({"scrollTop":0},1000); 
    });

    // 패밀리 사이트 푸터
    
	$('.select .arrow').toggle(function(){
		$('.select .aList').fadeIn('slow');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
	},function(){
        $('.select .aList').fadeOut('fast');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
	});

	//tab키 처리
	  $('.select .arrow').on('focus', function () {        
              $('.select .aList').fadeIn('slow');	
       });
       $('.select .aList li:last a').on('blur', function () {        
              $('.select .aList').fadeOut('fast');
       });
});
