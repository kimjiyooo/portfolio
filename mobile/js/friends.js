      var cnt2=0;  // 0 1 2 3  
      var friends = [
          {tit:'벨루가' , text:'눈처럼 새하얀 벨루가! 러시아어로 "하얗다"라는 뜻입니다...' , imgscr:'friends01_x2.png'},
          {tit:'캘리포니아 바다사자' , text:'똘망똘망한 눈과 뛰어난 균형감각을 자랑하는 날렵한...' , imgscr:'friends02_x2.png'},
          {tit:'참물범', text:'온대부터 한대까지 먼 바다를 오가며 사는 참물범은 추운 환...' , imgscr:'friends03_x2.png'},
          {tit:'훔볼트 펭귄', text:'훔볼트 펭귄은 따뜻한 지역인 페루해류가 흐르는 연안...' , imgscr:'friends04_x2.png'},
          {tit:'피라냐', text:'민물 육식성 물고기로, 원주민말로 "이빨이 있는 물고기"...' , imgscr:'friends05_x2.png'},
          {tit:'얼룩 매가오리', text:'롯데월드 아쿠아리움 메인수조의 마스코트 가오리 얼룩 매가...' , imgscr:'friends06_x2.png'},
          {tit:'매부리 바다거북', text:'매부리 바다거북은 따뜻한 열대바다에 서식하는 멸종위기...' , imgscr:'friends07_x2.png'}
      ];
      var total2=friends.length;  //이미지의 총개수 7
    
      function change(){
         $('.friends_inner div').css('background', 'url(./images/'+friends[cnt2].imgscr+') center no-repeat').hide().fadeIn('slow');
         $('.friend_text dt').html(friends[cnt2].tit);
         $('.friend_text dd').text(friends[cnt2].text);
      }

      $('.next').click(function(e){
         e.preventDefault();

         cnt2++;  // 0 1 2 3 4 5 6 0 
         if(cnt2==total2){
            cnt2=0;
         }
         change();
      });

      $('.prev').click(function(e){
         e.preventDefault();

         cnt2--;  // 6 5 4 3 2 1 0 6
         if(cnt2==-1){
            cnt2=total2-1;
         }
         change();
      });