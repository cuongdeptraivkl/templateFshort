

///////////////////// scroll play video//////////////////////
var videos = document.getElementsByTagName("video");

function checkScroll() {
  var fraction = 0.7; // Play when 80% of the player is visible.

  for (var i = 0; i < videos.length; i++) {
    var video = videos[i];

    var x = video.offsetLeft,
      y = video.offsetTop,
      w = video.offsetWidth,
      h = video.offsetHeight,
      r = x + w, //right
      b = y + h, //bottom
      visibleX,
      visibleY,
      visible;

    visibleX = Math.max(
      0,
      Math.min(
        w,
        window.pageXOffset + window.innerWidth - x,
        r - window.pageXOffset
      )
    );
    visibleY = Math.max(
      0,
      Math.min(
        h,
        window.pageYOffset + window.innerHeight - y,
        b - window.pageYOffset
      )
    );

    visible = (visibleX * visibleY) / (w * h);

    if (visible > fraction) {
      video.play();
    } else {
      video.pause();
    }
  }
}
window.addEventListener("scroll", checkScroll, false);
window.addEventListener("resize", checkScroll, false);

  var bgfollow = document.querySelector(".btn_edit_user_other");
  var followdetailother = document.querySelector(".btn_edit_user_other_span");
  if (followdetailother) {
    followdetailother.innerHTML = "Follow";
    function followOther(btn) {
      var follow = btn.dataset.follow;

      if (Number(follow) == 1) {
        followdetailother.innerHTML = "Đang Follow";
        bgfollow.style.backgroundColor = "white";
        bgfollow.style.color = "#ff3b5c";
        bgfollow.style.border = "2px solid #ff3b5c";
        btn.dataset.follow = 0;
      } else {
        var checkFL = confirm("Do you want unfollow ?");
        if (checkFL == false) {
          followdetailother.innerHTML = "Đang Follow";
          bgfollow.style.backgroundColor = "white";
          bgfollow.style.color = "#ff3b5c";
          bgfollow.style.border = "2px solid #ff3b5c";
        } else {
          followdetailother.innerHTML = "Follow";
          bgfollow.style.backgroundColor = "#ff3b5c";
          bgfollow.style.color = "white";
          btn.dataset.follow = 2;
        }
      }
    }
  }