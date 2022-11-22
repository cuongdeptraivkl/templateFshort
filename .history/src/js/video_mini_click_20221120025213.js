//  detail video button
var mini_video = (document.querySelector("#video_detail_mini").style.display =
  "none");
  if (mini_video){
document.querySelector(
          "#video_detail_mini"
        ).style.display = "none";
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

// ================Login INdex=============//
document.querySelector(".info_login_headerr").style.display = "none";
function IMG() {
  var loginUser = document.querySelector(".info_login_headerr");
  if (loginUser.style.display == "block") {
    loginUser.style.display = "none";
  } else {
    loginUser.style.display = "block";
  }
} 

// render video user

function Vieo_detail(data) {
  let ListVideo = document.querySelector(".Post_video_user_detail");
  if (ListVideo){
    ListVideo.innerHTML = "";
    for (let item of data) {
      ListVideo.innerHTML += `
              <div class="video_user_detail" >
                          <span onclick="showVideo()"> <video src="${item.link}" type="video/mp4" type="video/mp4" muted class="vid" loop>
                          </video></span>
                          <div class="views_video_user_detail d-flex align-items-center">
                            <i class='bx bx-play fs-4'></i><span class="view_video"></span>
                          </div>
                        </div>`;
    }
  }
}
Vieo_detail(array_user_detail);

// render posts 

function Posts_user(datauser) {
  let ListPosts = document.querySelector(".Posts_user");
 if (ListPosts){
   ListPosts.innerHTML = "";
   for (let item of datauser) {
     ListPosts.innerHTML += `
               <div
              class="posts_user_detail"
            >
              <span onclick="showProduct()"><img src="${item.links}" /></span>
                <div class="icon_posts_user" onclick="showProduct()">
                  <span>
                    <i class="bx bxs-heart"></i> 1k
                  </span>
                  <span><i class='bx bx-message-rounded-dots bx-flip-horizontal' ></i> 200</span>
                </div>
              </div>`;
   }
 }
}
Posts_user(array_posts_user);

