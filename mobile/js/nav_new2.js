$(document).ready(function() {
   var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
   $(".menu_ham").click(function() { //메뉴버튼 클릭시
       
       var documentHeight =  $(document).height(); //전체 페이지의 높이
       $("#gnb").css('height',documentHeight); //gnb의 높이를 전체 페이지 높이와 동일...

      if(op==false){
        $("#gnb").animate({right:0,opacity:1}, 'fast');
        $('#headerArea').addClass('mn_open');
        op=true;
      }else{
        $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
        $('#headerArea').removeClass('mn_open');
        op=false;
      }

   });
   
   
    //2depth 메뉴 교대로 열기 처리 
    var onoff=[false,false,false,false]; 
     //각각의 1depth메뉴의 열림(true)/닫힘(false) 변수
    var arrcount=onoff.length; //4개
    
    //console.log(arrcount);
    
    $('#gnb .depth1 h3 a').click(function(){
        var ind=$(this).parents('.depth1').index(); //0~5
        //var ind=$(this).index('#gnb .depth1 h3 a');
        
        //console.log(ind);
        
       if(onoff[ind]==false){  //클릭한 1depth메뉴가 닫혀있냐??
        //$('#gnb .depth1 ul').hide();
        $(this).parents('.depth1').find('ul').slideDown('slow'); 
          //해당 서브메뉴는 열어라
        $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
         //나머지 모든 서브메뉴를 닫아라
         for(var i=0; i<arrcount; i++) onoff[i]=false; //모든 상태를 false
         onoff[ind]=true; //해당메뉴 상태만 true
           
         $('.depth1 span').text('expand_more'); //모두 +   
         $(this).find('span').text('expand_less');   // 해당메뉴만 -
            
       }else{  //클릭한 1depth메뉴가 열려있냐??
         $(this).parents('.depth1').find('ul').slideUp('fast'); 
           //자신의 메뉴만 닫아라
         onoff[ind]=false; //해당메뉴 false   
           
         $(this).find('span').text('expand_more');     // 해당메뉴만 +
       }
    });    

    // 스크롤처리
    var visual_height = $('.visual').height()-80; // 500
    $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
      var scroll = $(window).scrollTop(); //스크롤의 거리

      if(scroll>visual_height){ //500이상의 거리가 발생되면
          $('#headerArea').css('background','rgba(255,255,255,1)').css('box-shadow', '1px 1px 10px 1px rgba(0,0,0,.4)');  //top보여라~~~~
          $('#headerArea').addClass('down');
          $('#headerArea .header_top .logo a').css({
              'background':'url(./images/gnb_logo_x2.png)',
              'background-size':'80px 52px'
          });
      }else{
          $('#headerArea').css('background','none').css('box-shadow', '1px 1px 10px 1px rgba(0,0,0,0)');//top안보여라~~~~
          $('#headerArea').removeClass('down');
          $('#headerArea .header_top .logo a').css({
            'background':'url(./images/header_logo_x2.png)',
            'background-size':'80px 52px'
          });
      }
    });
  
  });

  // top이동
  // $('.topMove').hide();
         $(window).on('scroll',function(){
               var scroll = $(window).scrollTop();
               if(scroll>300){
                   $('.topMove').fadeIn('slow');
              }else{
                  $('.topMove').fadeOut('fast');
              }
         });
           $('.topMove').click(function(e){
                e.preventDefault();
              //상단으로 스르륵 이동합니다.
              $("html,body").stop().animate({"scrollTop":0},1000);
          });


