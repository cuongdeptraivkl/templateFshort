
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

// click color and background header
var li_menu_header = document.querySelectorAll(".li_menu_header");
var value_li_header =
for ()