$(document).ready(function() {
 
  // 네비 높이 맞추기
  var screenSize = $(document).width();
  if(screenSize>640){
   $('header .mainMenu').height('auto');
  }else{
   var winh = $(document).height();
   $('header .mainMenu').height(winh);
  }
  
   var current=0; // 0(해상도가 모바일) 1(해상도가 소형 테블릿 이상)
  $(window).resize(function(){  //윈도우를 늘렸다 줄었다 할 때
   var screenSize = $(window).width(); // 가로 해상도
   if( screenSize > 768){  //소형 테블릿 이상이면
     $(".mainMenu").show(); // 메인메뉴 보여라
     $('header .mainMenu').height('auto');
      current=1; // 소형테블릿 이상의 해상도
   }
   if(current==1 && screenSize <= 768){ //640보다 작으면
     $(".mainMenu").hide();  // 메인메뉴 숨겨라
     $('header .mainMenu').height(winh);
      current=0; // 모바일의 해상도
   }
   }); 

   var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
   $(".menu_ham").click(function(e) { //메뉴버튼 클릭시
       e.preventDefault();
       var documentHeight =  $(document).height(); //전체 페이지의 높이
       $("#gnb").css('height',documentHeight); //gnb의 높이를 전체 페이지 높이와 동일...

      if(op==false){
        $("#gnb").fadeIn('slow');
        $('#headerArea').addClass('mn_open');
        op=true;
      }else{
        $("#gnb").fadeOut('fast');
        $('#headerArea').removeClass('mn_open');
        op=false;
      }

   });


  // top이동
  $('.top_move').click(function(e){
    e.preventDefault();
    $("html,body").stop().animate({"scrollTop":0},1000); 
  });
   
 });



