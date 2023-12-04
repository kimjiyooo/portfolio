      var cnt2=0;  // 0 1 2 3  
      var friends = [
          {tit:'<span>01</span>벨루가' , text:'눈처럼 새하얀 벨루가! 러시아어로 "하얗다"라는 뜻입니다. 태어날 땐 짙은 회색이지만 다 크면 하얀 색으로 바뀝니다. 벨루가가 사는 곳은 북극해를 중심으로한 얼음으로 뒤덮인...' , imgscr:'friend1.jpg'},
          {tit:'<span>02</span>캘리포니아 바다사자' , text:'똘망똘망한 눈과 뛰어난 균형감각을 자랑하는 날렵한 캘리포니아 바다사자! 캘리포니아 바다사자는 물범과 함께 발이 지느러미로 된 기각류에 속합니다. 앞지느러미와 뒷지느러미...' , imgscr:'friend2.jpg'},
          {tit:'<span>03</span>참물범', text:'온대부터 한대까지 먼 바다를 오가며 사는 참물범은 추운 환경에 적응 진화되었습니다. 귓바퀴가 퇴화된 작은 구멍의 귀와, 피부 아래 두꺼운 지방층도 있어 체온 유지에 유리합니다... ' , imgscr:'friend3.jpg'},
          {tit:'<span>04</span>훔볼트 펭귄', text:'훔볼트 펭귄은 따뜻한 지역인 페루해류가 흐르는 연안의 작은 섬에서 물고기를 잡아먹으며 삽니다. 가슴 위쪽에는 굵고 검은 띠가 있는 것이 특징이고, 어린 개체는 전체적으로 어두운...' , imgscr:'friend4.jpg'},
          {tit:'<span>05</span>피라냐', text:'민물 육식성 물고기로, 원주민말로 "이빨이 있는 물고기"라는 뜻 입니다. 피라냐의 아래턱이 매우 발달하였고, 삼각형의 예리한 이빨로 질긴 먹잇감도 순식간에 먹이를 먹는답니다...' , imgscr:'friend5.jpg'},
          {tit:'<span>06</span>얼룩 매가오리', text:'롯데월드 아쿠아리움 메인수조의 마스코트 가오리 얼룩 매가오리입니다. 유영하는 모습이 마치 하늘을 나는 매의 날개짓과 비슷하다고 해서 "얼룩 매가오리"라는 이름이 붙었...' , imgscr:'friend6.jpg'},
          {tit:'<span>07</span>매부리 바다거북', text:'매부리 바다거북은 따뜻한 열대바다에 서식하는 멸종위기종입니다. 생김새는 다른 바다거북과 비슷하지만 부리 끝이 휜 모양이 매를 닮았고 등껍질 가장자리가 톱니모양인 것...' , imgscr:'friend7.jpg'}
      ];
      var total2=friends.length;  //이미지의 총개수 7
    
      function change(){
         $('.friends img').attr('src', './images/'+friends[cnt2].imgscr).hide().fadeIn('slow');
         $('.friends li dt').html(friends[cnt2].tit);
         $('.friends li dd').text(friends[cnt2].text);
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