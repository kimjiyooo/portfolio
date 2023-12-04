
$(document).ready(function() {
   	
	// $('.select .arrow').click(function(){
	// 	$('.select .aList').fadeIn('slow');			  
	// });

	// $('.select .aList').mouseleave(function(){
	// 	$(this).fadeOut('fast');			  
	// });
  
	$('.subNav .arrow').toggle(function(){
		$('.subNav .aList').slideDown('fast');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
	},function(){
        $('.subNav .aList').slideUp('fast');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
	});

	//tab키 처리
	  $('.subNav .arrow').on('focus', function () {        
              $('.subNav .aList').slideDown('fast');	
       });
       $('.subNav .aList li:last a').on('blur', function () {        
              $('.subNav .aList').slideUp('fast');
       });
 
});

