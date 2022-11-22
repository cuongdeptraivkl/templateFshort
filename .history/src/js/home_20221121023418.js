// export { default as video_user_detail } from "./Render_video.js";
const array_user_detail = [
  {
    id: 1,
    name: "Remember Me",
    singer: "Sơn Tùng MTP",
    link: "src/Video/Snaptik.app_7162392369164307739.mp4",
  },
  {
    id: 2,
    name: "Waiting For You",
    singer: "Mono",
    link: "src/Video/Snaptik.app_7154930992099364142.mp4",
  },
  {
    id: 3,
    name: "Một Năm Mới Bình An",
    singer: "Sơn Tùng MTP",
    link: "src/Video/Snaptik.app_7163515308651679003.mp4",
  },
  {
    id: 4,
    name: "Mantoiyat",
    singer: "Raftaar x Nawazuddin Siddiqui",
    link: "src/Video/Snaptik.app_7163609441110084891.mp4",
  },
  {
    id: 5,
    name: "Aage Chal",
    singer: "Raftaar",
    link: "src/Video/Snaptik.app_7163614237363834139.mp4",
  },
  {
    id: 6,
    name: "Damn",
    singer: "Raftaar x kr$na",
    link: "src/Video/Snaptik.app_7163609441110084891.mp4",
  },
  {
    id: 7,
    name: "Feeling You",
    singer: "Raftaar x Harjas",
    link: "src/Video/Snaptik.app_7163853757409676571.mp4",
  },
  {
    id: 8,
    name: "Remember Me",
    singer: "Sơn Tùng MTP",
    link: "src/Video/Snaptik.app_7162392369164307739.mp4",
  },
  {
    id: 9,
    name: "Waiting For You",
    singer: "Mono",
    link: "src/Video/Snaptik.app_7154930992099364142.mp4",
  },
  {
    id: 10,
    name: "Một Năm Mới Bình An",
    singer: "Sơn Tùng MTP",
    link: "src/Video/Snaptik.app_7163515308651679003.mp4",
  },
];

const array_posts_user = [
  {
    id: 1,
    name: "Remember Me",
    singer: "Sơn Tùng MTP",
    links:
      "src/img/35051507_1638728506249244_5583672499452772352_o.jpg.crdownload",
  },
  {
    id: 2,
    name: "Waiting For You",
    singer: "Mono",
    links: "src/img/4k-programming-hello-world-text-tpiuwb02b1g2u7kb.jpg",
  },
  {
    id: 3,
    name: "Một Năm Mới Bình An",
    singer: "Sơn Tùng MTP",
    links: "src/img/5557920_CV.jpg",
  },
  {
    id: 4,
    name: "Mantoiyat",
    singer: "Raftaar x Nawazuddin Siddiqui",
    links: "src/img/bi-quyet-chup-anh-hoang-hon-dep-Binhminhdigital(1).jpg",
  },
  {
    id: 5,
    name: "Aage Chal",
    singer: "Raftaar",
    links: "src/img/chup-anh-hoang-hon-bang-smartphone_800x450.jpg",
  },
  {
    id: 6,
    name: "Damn",
    singer: "Raftaar x kr$na",
    links: "src/img/images.jpg",
  },
  {
    id: 7,
    name: "Feeling You",
    singer: "Raftaar x Harjas",
    links: "src/img/Ngan-Ha25.jpg",
  },
];

///////////////////// scroll play video//////////////////////
var divvideohome = document.querySelector(".links_video");
if (divvideohome) {
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
}
window.addEventListener("scroll", checkScroll, false);
window.addEventListener("resize", checkScroll, false);
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

// ==============comment post video============//
let check = "none";
function commentPost() {
  if (check == "none") {
    check = "block";
  } else {
    check = "none";
  }
  let cmtPost = document.querySelectorAll(".cmtPost");
  let commentPost = document.querySelectorAll(".comment_video_page");
  for (let i = 0; i < commentPost.length; i++) {
    cmtPost[i].addEventListener("click", function () {
      commentPost[i].style.display = check;
    });
  }
}

// ===================follow===============//
let followcheck = "follow";
function follow(btn) {
  var follow = btn.dataset.follow;
  console.log(btn.dataset.follow);
  if (Number(follow)) {
    btn.innerHTML = "following";
    btn.dataset.follow = 0;
  } else {
    var checkFL = confirm("Do you want unfollow ?");
    if (checkFL == false) {
      btn.innerHTML = "following";
    } else {
      btn.innerHTML = "follow";
      btn.dataset.follow = 1;
    }
  }
  // if (followcheck == "follow") {
  //   followscheck = "following";
  // } else {
  //   followcheck = "follow";
  // }
  // const btns = document.querySelectorAll('.btnFLLL');
  // for (let i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", function () {
  //     // debugger;
  //     this.innerHTML = followcheck;
  //   })
  // }
}

// ================= follow right root==============//

let followcheckRight = "Follow";
function followRight() {
  if (followcheckRight == "Follow") {
    followcheckRight = "following";
  } else {
    followcheckRight = "Follow";
  }
  const btns = document.querySelectorAll(".follow_right_root");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      // debugger;
      this.innerHTML = followcheckRight;
    });
  }
}

// follow()

// ====header===============//
function Aleart() {
  var aleart_mess_header = document.querySelector(".aleart_mess_header");
  var aleart_notifications = document.querySelector(".aleart_notifications");
  if (aleart_notifications.style.display == "block") {
    aleart_notifications.style.display = "none";
  } else {
    aleart_notifications.style.display = "block";
    aleart_mess_header.style.display = "none";
  }
}

function Mess() {
  var aleart_notifications = document.querySelector(".aleart_notifications");
  var aleart_mess_header = document.querySelector(".aleart_mess_header");
  if (aleart_mess_header.style.display == "block") {
    aleart_mess_header.style.display = "none";
  } else {
    aleart_mess_header.style.display = "block";
    aleart_notifications.style.display = "none";
  }
}
// =============== post_video =============//
function postvd() {
  var postvideo = document.querySelector(".postvideo");
  var testposstvd = document.querySelector(".testposstvd");
  if (postvideo.style.display == "block") {
    postvideo.style.display = "none";
  } else {
    testposstvd.style.marginTop = "100px";
    postvideo.style.transition = "all 2s";
    postvideo.style.display = "block";
  }
}
// ============post news=============//
function postnews() {
  var testposstvd = document.querySelector(".testposstvd");
  var postnews = document.querySelector(".postnews");
  if (postnews.style.display == "block") {
    postnews.style.display = "none";
  } else {
    testposstvd.style.marginTop = "100px";
    postnews.style.transition = "all 2s";
    postnews.style.display = "block";
  }
}

function viewAll() {
  var viewallText = document.querySelector("#viewAll");
  var viewall_friends_root_right = document.querySelector(
    ".viewall_friends_root_right"
  );
  if (viewall_friends_root_right.style.display == "block") {
    viewall_friends_root_right.style.display = "none";
    viewallText.innerHTML = "Xem tất cả";
  } else {
    viewall_friends_root_right.style.display = "block";
    viewallText.innerHTML = "Thu gọn";
  }
}

// ============= check validate =================//
function validate(event) {
  event.preventDefault();
  var contentVLD = document.querySelectorAll(".post_content_video").value;
  var btnVLD = document.querySelectorAll(".post_videos").value;
  if (contentVLD != "") {
    alert("đã nhận");
  }
}

// follow and unfollow user
var bgfollow = document.querySelector(".btn_edit_user_other");
var followdetailother = document.querySelector(".btn_edit_user_other_span");
if (followdetailother) {
  followdetailother.innerHTML = "Follow";
  function followOther(btn) {
    var follow = btn.dataset.follow;

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
}

//  Video Time Bar

//  detail posts button
var mini_posts = document.querySelector("#product_sp");
if (mini_posts) {
  document.querySelector("#product_sp").style.display = "none";
  function showProduct() {
    var post = document.querySelector("#product_sp");
    var pcs = document.querySelector(".product_content_sp");
    if (post.style.display == "flex") {
      post.style.display = "none";
      post.style.transition = ".6s";
      pcs.style.top = "-10px";
      pcs.style.transition = ".6s";
    } else {
      post.style.display = "flex";
      post.style.justifyContent = "center";
      post.style.alignItems = "center";
      pcs.style.top = "0";
      pcs.style.left = "0";
      pcs.style.transition = ".6s";
    }
  }
}

// Check value input
function checkcomment_ip() {
  var ip = document.querySelector(".ip_cmt");
  var btn = document.querySelector(".button_comment");
  if (ip) {
    if (ip.value == "") {
      btn.style.opacity = "0.3";
      btn.disabled = "disabled";
    } else {
      btn.style.opacity = "1";
      btn.disabled = "";
    }
  }
}
checkcomment_ip();

// add like comment video

var valuenumberposts = 0;
var numberlikeposts = document.querySelector(".number_view_posts");
const iconheart = document.querySelector("#heart-icon");
function clickheartposts() {
  if (iconheart.classList[1] == "bx-heart") {
    iconheart.classList.add("bxs-heart");
    iconheart.classList.remove("bx-heart");
    valuenumberposts++;
    numberlikeposts.innerHTML = valuenumberposts;
  } else {
    iconheart.classList.add("bx-heart");
    iconheart.classList.remove("bxs-heart");
    valuenumberposts--;
    numberlikeposts.innerHTML = valuenumberposts;
  }
}

// even click commnent

var comment = document.querySelector(".user_comment_box");
if (comment) {
  document.querySelector(".user_comment_box").style.display = "none";
  function comment() {
    var commnentfs = document.querySelector(".user_comment_box");
    var comtposts = document.querySelector(".comment_posts_user");
    const iconchat = document.querySelector("#chat-icon");
    if (
      iconchat.classList[1] == "bxs-message-rounded" ||
      commnentfs.style.display == "block"
    ) {
      commnentfs.style.display = "none";
      comtposts.style.height = "150px";
      comtposts.style.transition = ".3s";
      iconchat.classList.add("bx-message-rounded");
      iconchat.classList.remove("bxs-message-rounded");
    } else {
      comtposts.style.height = "400px";
      comtposts.style.transition = ".3s";
      commnentfs.style.display = "block";
      iconchat.classList.add("bxs-message-rounded");
      iconchat.classList.remove("bx-message-rounded");
    }
  }
}

// Check value input commetn video mini
function checkcomment_ipvideo() {
  var ipvd = document.querySelector(".ip_cmt_mini");
  var btnvd = document.querySelector(".btn_cmt_vdmini");
  if (ipvd) {
    if (ipvd.value == "") {
      btnvd.style.color = "#414141";
      btnvd.disabled = "disabled";
    } else {
      btnvd.style.color = "red";
      btnvd.disabled = "";
    }
  }
}
checkcomment_ipvideo();

// hover video play
const Video = document.querySelectorAll(".vid");
for (let i = 0; i <= Video.length; i++) {
  Video[i].addEventListener("mouseover", function () {
    Video[i].play();
  });
  Video[i].addEventListener("mouseout", function () {
    Video[i].pause();
    Video[i].load();
  });
}


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



