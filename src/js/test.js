// let btns = document.getElementsByClassName('.btnFLLL');
// for(let i = 0; i < btns.length; i++){
//     btns[0].addEventListener("dblclick",function(){
//      this.innerHTML="follow";
//     });
//   btns[0].addEventListener("click",function(){     
//    this.innerHTML="following " ;
//   })
// }
//     let btns = document.querySelectorAll('.btnFl');
//     for(let i = 0; i < btns.length; i++){
//         btns[i].addEventListener("dblclick",function(){
//          this.innerHTML="follow";
//         });
//       btns[i].addEventListener("click",function(){     
//        this.innerHTML="following " ;
//       })
//    } 



       


    // var videos = document.getElementsByTagName("video");

// function checkScroll() {
//   var fraction = 0.7; // Play when 80% of the player is visible.

//   for (var i = 0; i < videos.length; i++) {
//     var video = videos[i];

//     var x = video.offsetLeft,
//       y = video.offsetTop,
//       w = video.offsetWidth,
//       h = video.offsetHeight,
//       r = x + w, //right
//       b = y + h, //bottom
//       visibleX,
//        visibleY,
//       visible;

//     visibleX = Math.max(
//       0,
//       Math.min(
//         w,
//         window.pageXOffset + window.innerWidth - x,
//         r - window.pageXOffset
//       )
//     );
//     visibleY = Math.max(
//       0,
//       Math.min(
//         h,
//         window.pageYOffset + window.innerHeight - y,
//         b - window.pageYOffset
//       )
//     );

//     visible = (visibleX * visibleY) / (w * h);

//     if (visible > fraction) {
//       video.play();
//     } else {
//       video.pause();
//     }
//   }
// }
// window.addEventListener("scroll", checkScroll, false);
// window.addEventListener("resize", checkScroll, false);
