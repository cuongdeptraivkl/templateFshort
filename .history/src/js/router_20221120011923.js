// ============= chuyeenr trang=============//
const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

function Home(a, b, c, d) {
  document.getElementById(a).style.color = "#2e88ff";
  document.getElementById(a).style.border = "1px solid rgba(0, 0, 255, 0.849)";
  document.getElementById(b).style.color = "rgb(37, 37, 37)";
  document.getElementById(b).style.border = "none";
  document.getElementById(c).style.color = "rgb(37, 37, 37)";
  document.getElementById(c).style.border = "none";
  document.getElementById(d).style.color = "rgb(37, 37, 37)";
  document.getElementById(d).style.border = "none";

  route();
}

function Span(x, y, z, e) {
  document.getElementById(x).style.width = "100%";
  document.getElementById(y).style.width = "0";
  document.getElementById(z).style.width = "0";
  document.getElementById(e).style.width = "0";
  route();
}

const routes = {
  "/": "/pages/index.html",
  "/News/": "/pages/about.html",
  "/chat/": "/pages/chat.html",
  "/car/": "/pages/car.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes["/"];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

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
    viewallText.innerHTML = "Xem t???t c???";
  } else {
    viewall_friends_root_right.style.display = "block";
    viewallText.innerHTML = "Thu g???n";
  }
}

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

// ============= check validate =================//
function validate(event) {
  event.preventDefault();
  var contentVLD = document.querySelectorAll(".post_content_video").value;
  var btnVLD = document.querySelectorAll(".post_videos").value;
  if (contentVLD != "") {
    alert("???? nh???n");
  }
}


// render video home 

function Posts_user(datavideohome) {
  let Listvideo = document.querySelector(".links_video");
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
Posts_user(array_posts_user);