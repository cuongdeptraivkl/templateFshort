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
 if (ip){
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
  if (comment){
   comment.style.display = "none";
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
    if (ipvd){
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
var viewnumber = document.querySelectorAll(".view_video");
var valuenumber = 0;
for (let i = 0; i <= Video.length; i++) {
  Video[i].addEventListener("mouseover", function () {
    Video[i].play();
  });
  Video[i].addEventListener("mouseout", function () {
    Video[i].pause();
    Video[i].load();
  });
}


// ================Login INdex=============//

var info_login = document.querySelector(".info_login_headerr");
if (info_login)
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

// ===============right view all friends=============//
// var viewall = document.querySelector('#viewAll');
// viewall.onclick =()=>{
//     var list_friends_root_right = document.querySelector('.viewall_friends_root_right');
//     if(list_friends_root_right.style.display=="none"){
//       list_friends_root_right.style.display= "block"
//     }
// }

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

///////////////////// scroll play video//////////////////////
var videoshome = document.querySelector(".links_video video");

function checkScroll() {
  var fraction = 0.7; // Play when 80% of the player is visible.

  for (var i = 0; i < videoshome.length; i++) {
    var video = videoshome[i];

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