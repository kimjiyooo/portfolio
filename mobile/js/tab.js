// JavaScript Document

$(document).ready(function(){
    var cnt=2;  //탭메뉴 개수 ***
    $('.tab_box .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.tab_box .tab1').css('border-bottom','3px solid #02a7cf').css('font-weight','700'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
      
    $('.tabs .tab').click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
          
          var ind = $(this).index('.tabs .tab');  // 클릭시 해당 index를 뽑아준다
          //console.log(ind);

          $(".tab_box .contlist").hide(); //모든 탭내용을 안보이게...
          $(".tab_box .contlist:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
          $('.tab').css('border-bottom','3px solid #fff').css('font-weight','400'); //모든 탭메뉴를 비활성화
          $(this).css('border-bottom','3px solid #02a7cf').css('font-weight','700'); // 클릭한 해당 탭메뉴만 활성화

     });
   

  });

