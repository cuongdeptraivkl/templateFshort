//  detail video button
var mini_video = document.querySelector("#video_detail_mini");
if (mini_video) {
  document.querySelector("#video_detail_mini").style.display = "none";
  function showVideo() {
    var videoplay = document.querySelector(".video_click_play");
    var playiconvd = document.querySelector(".icon_play_video_center");
    var videos = document.querySelector("#video_detail_mini");
    if (videos.style.display == "block") {
      videoplay.pause();
      videoplay.load();
      playiconvd.style.display = "block";
      videos.style.display = "none";
    } else {
      videoplay.play();
      playiconvd.style.display = "none";
      videos.style.display = "block";
    }
  }
}

// click play video

var video = document.querySelector(".video_click_play");
var playicon = document.querySelector(".icon_play_video_center");
function play() {
  if (video.paused) {
    video.play();
    playicon.style.display = "none";
  } else {
    video.pause();
    playicon.style.display = "block";
  }
}

// event volumns video mini
const volume = document.querySelector("#volume");
const volum2 = document.querySelector("#volum2");
const videoplay = document.querySelector(".video_click_play");
volume.oninput = () => {
  videoplay.volume = volume.value;
  if (volume.value == "0") {
    volum2.className = "bx bx-volume-mute";
  } else {
    volum2.className = "bx bx-volume-full";
    volum2.textContent = "";
  }
};

// ranger time video

var vid, playbtn, seekslider, curtimetext, durtimetext;
function intializePlayer() {
  // Set object references
  vid = document.querySelector(".video_click_play");
  seekslider = document.querySelector("#seekslider_minivideo");
  curtimetext = document.querySelector("#curtimetext_minivideo");
  durtimetext = document.querySelector("#durtimetext_minivideo");
  // Add event listeners
  seekslider.addEventListener("change", vidSeek, false);
  vid.addEventListener("timeupdate", seektimeupdate, false);
}
window.onload = intializePlayer;
function vidSeek() {
  var seekto = vid.duration * (seekslider.value / 100);
  vid.currentTime = seekto;
}
function seektimeupdate() {
  var nt = vid.currentTime * (100 / vid.duration);
  seekslider.value = nt;
  var curmins = Math.floor(vid.currentTime / 60);
  var cursecs = Math.floor(vid.currentTime - curmins * 60);
  var durmins = Math.floor(vid.duration / 60);
  var dursecs = Math.floor(vid.duration - durmins * 60);
  if (cursecs < 10) {
    cursecs = "0" + cursecs;
  }
  if (dursecs < 10) {
    dursecs = "0" + dursecs;
  }
  if (curmins < 10) {
    curmins = "0" + curmins;
  }
  if (durmins < 10) {
    durmins = "0" + durmins;
  }
  curtimetext.innerHTML = curmins + ":" + cursecs;
  durtimetext.innerHTML = durmins + ":" + dursecs;
}

// click heart Number

function heart_video_cmt() {
  var click_like_video = document.querySelector(".heart_interactive i");
  var number_like_video = document.querySelector(".view_interactive_mini");
  var i = 0;
  if (click_like_video.style.color != "red") {
    click_like_video.style.color = "red";
    i++;
    number_like_video.innerHTML = i;
  } else {
    click_like_video.style.color = "white";
    number_like_video.innerHTML = i;
    i--;
  }
}

// even follow user other
    // var followdetailother = document.querySelector(".btn_edit_user_other_span");
    // var bgfollow = document.querySelector(".btn_edit_user_other");
    // function followOther() {
    //   if (followdetailother.innerHTML == "Follow") {
    //     followdetailother.innerHTML = "Đang Follow";
    //     bgfollow.style.backgroundColor = "white";
    //     bgfollow.style.color = "#ff3b5c";
    //     bgfollow.style.border = "2px solid #ff3b5c";
    //   } else {
    //     var checkconfirm = confirm("Do you want unfollow ?");
    //     if (checkconfirm == true){
    //       followdetailother.innerHTML = "Follow";
    //       bgfollow.style.backgroundColor = "#ff3b5c";
    //       bgfollow.style.color = "white";
    //     }else{
    //       followdetailother.innerHTML = "Đang Follow";
    //       bgfollow.style.backgroundColor = "white";
    //       bgfollow.style.color = "#ff3b5c";
    //       bgfollow.style.border = "2px solid #ff3b5c";
    //     }
    //   }
    // }

    var bgfollow = document.querySelector(".btn_edit_user_other");
    var followdetailother = document.querySelector(".btn_edit_user_other_span");
function followOther(btn) {
  var follow = btn.dataset.follow;
  // console.log(btn.dataset.follow);
  if (Number(follow)) {
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
      btn.dataset.follow = 1;
    }
  }
}
