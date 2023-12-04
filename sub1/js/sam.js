$(function(){



    $.ajax({
       url: './js/sam.json',
       dataType: 'json',
       success: function(data){
           var useData = data.friends;
           
           function dataPrint(arr){
               
                   var txt = '<ul>';
                   
                   for(var i in arr){
                       
                       var $Name = arr[i].Name;
                       var $Price = arr[i].Price;
                       var $Descript = arr[i].Descript;
                       var $Image = arr[i].Image;

                       txt+='<li>';
                       txt+='<img src="./images/content3/'+ $Image +'" alt="">';
                       txt+='<dl>';
                       txt+='<dt>'+$Name+'</dt>'; 
                       txt+='<dd>'+$Descript+'</dd>';
                       txt+='</dl>';
                       txt +='</li>';
                   }

                   txt += '</ul>';

                   $('.product_list').html(txt);
              
           };
           

           //초기실행, 함수호출
           dataPrint(useData);


           $('#btn').click(function(){ //검색버튼을 클릭하면
                 /*
                    var 객체배열 = 객체배열.filter(function(element){
                          return 조건절;  //조건에 만족하면 리턴
                        
                    });
                 */
                if($('#title').val()==''){
                    alert('생물명을 입력해 주세요');
                }
 


                var newArray = useData.filter(function(element){
                  
                //console.log($('#title').val());
                //return element.Name == $('#title').val();
                   return element.Name.includes($('#title').val());
                   //return element.Name==($('#title').val());
                });
                //전체 객체배열에서 각각의 객체중 Name값에 입력된 문자/단어가
                //포함되어 있는 객체만 다시 재배열로 만들어 준다(검색)
                //console.log(newArray);
                dataPrint(newArray);  //검색된 배열로 리스트 출력

                console.log(newArray.length);
                if(newArray.length==0){
                      $('.message').text('검색된 생물이 없습니다'); 
                }else{
                     $('.message').text(''); 
                }
           });

           $('.btn_all').click(function(){  //모두보기
               dataPrint(useData);
           });
       } 
   });
    
});