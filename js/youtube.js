 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() { // 절대 바꾸지 말 것
   new YT.Player('player', { // #player 라고하지 말것
     videoId: 'An6LvWQuj_8', 
     // 해당 유튜브 영상 주소의 v= 다음에 있는 것이 아이디
     // 값이고 해당 주소 전체를 복사하면 출력은 되지만
     // 제어를 할 수 없음
     playerVars: { // 영상을 재생하기 위한 여러가지 변수들
      autoplay: true,
      loop: true,
      playlist: 'An6LvWQuj_8' 
      // 영상을 반복재생 하기 위해서는 다시 넣어줘야함
     },
     events: {
       onReady: function (event) {
        event.target.mute()
       }
     }
   });
 }