
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
    viewallText.innerHTML = "Xem tất cả";
  } else {
    viewall_friends_root_right.style.display = "block";
    viewallText.innerHTML = "Thu gọn";
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

// // render video home

function Video_home(datavideohome) {
    let ListvideoHome = document.querySelector(".videos_page");
    if 
    ListvideoHome.innerHTML = "";
    for (let item of datavideohome) {
        ListvideoHome.innerHTML += `
                   <div class="logo_name_videos_btn">
    
            <div class="logo_name_videos">
                <img src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-9/190108336_322648402555040_2100790391455013605_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DToGjk3hkasAX9wjEDD&_nc_ht=scontent.fhan2-1.fna&oh=00_AfDrshz1dpQG6f22a97d0X3EZUflybpE1t2KdKkECIi5tQ&oe=63960180"
                    alt="">
                <div class="text_logo_name_videos">
                    <p>Cristiano Ronaldo <i class='bx bxs-check-circle' style='color:#2e88ff'></i></p>
                    <p>November 4 at 3:28 AM ~ <i class='bx bx-world'></i></p>
                </div>
            </div>
    
            <div class="btn_logo_name_video">
                <!-- <input type="button" value="hello" id="test"> -->
                <button onclick="follow(this)" data-follow="1" class="btnFLLL">follow</button>
            </div>
        </div>
    <div class="links_video">
        <video width="50%" height="60%" preload=""  controls type="video/mp4" loop
            src="${item.link}"></video>
    </div>
    <div class="feeling">
        <div class="icon_felling">
            <i class='bx bx-heart'></i>
            <i onclick="commentPost()" class='bx bx-message-rounded cmtPost'></i>
            <i class='bx bx-share bx-flip-horizontal'></i>
        </div>
        <div class="infor_view">
            <p>100 lượt thích</p>
            <p>1k Comment</p>
        </div>
    </div>
    <div class="content_video_page">
        <p><b>#manhcuongEntertaiment</b></p>
        <p>Tôi thật hối hận khi không biết tới dev front end Mạnh Cường sớm hơn, thật đáng tiếc huhuhu. Bởi vì anh ta
            quá là đỉnh đi mà huhuhu 😭😭😭 </p>
    </div>
    <div class="comment_video_page">
        <div class="info_comment_video_page">
            <img src="https://scontent.fhan3-2.fna.fbcdn.net/v/t1.15752-9/312107847_1196560997565728_8179199288161697139_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=JeuULjMZGO0AX_mqE76&_nc_ht=scontent.fhan3-2.fna&oh=03_AdRTjsav79Kck9Dmss5USy6wW1qmbTPVLgNGhvfDS4rknw&oe=6396E68D" alt="">
            <div class="text_logo_name_videos">
                <p>Hậu ăn cứt<i class='bx bxs-check-circle' style='color:#2e88ff'></i></p>
                <p>November 4 at 3:28 AM ~ <i class='bx bx-world'></i></p>
            </div>
        </div>
        <div class="value_comment_user">
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
          </p>
        </div>
    </div>
    <div class="input_comment">
      <form action="">
        <i class='bx bx-wink-smile'></i>
        <input type="text" required  placeholder="Thêm bình luận">
        <button type="submit"> Đăng</button>
      </form>
    </div>`;
  }
}
Video_home(array_user_detail);

// ============= check validate =================//
function validate(event) {
  event.preventDefault();
  var contentVLD = document.querySelectorAll(".post_content_video").value;
  var btnVLD = document.querySelectorAll(".post_videos").value;
  if (contentVLD != "") {
    alert("đã nhận");
  }
}

// render about home 
function About_home(dataabouthome) {
  let ListaboutHome = document.querySelector(".about_render_video");
  ListaboutHome.innerHTML;
  for (let item of dataabouthome) {
    ListaboutHome.innerHTML += `
    <div class="logo_name_videos_btn">

        <div class="logo_name_videos">
            <img src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-9/190108336_322648402555040_2100790391455013605_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DToGjk3hkasAX9wjEDD&_nc_ht=scontent.fhan2-1.fna&oh=00_AfDrshz1dpQG6f22a97d0X3EZUflybpE1t2KdKkECIi5tQ&oe=63960180"
                alt="">
            <div class="text_logo_name_videos">
                <p>Cristiano Ronaldo <i class='bx bxs-check-circle' style='color:#2e88ff'></i></p>
                <p>November 4 at 3:28 AM ~ <i class='bx bx-world'></i></p>
            </div>
        </div>

        <div class="btn_logo_name_video">
            <!-- <input type="button" value="hello" id="test"> -->
            <button onclick="follow(this)" data-follow="1" class="btnFLLL">follow</button>
        </div>
    </div>
    <div class="links_video">
        <img src="${item.links}" width="50%" alt="">
    </div>
    <div class="feeling">
        <div class="icon_felling">
            <i class='bx bx-heart'></i>
            <i onclick="commentPost()" class='bx bx-message-rounded cmtPost'></i>
            <i class='bx bx-share bx-flip-horizontal'></i>
        </div>
        <div class="infor_view">
            <p>100 lượt thích</p>
            <p>1k Comment</p>
        </div>
    </div>
    <div class="content_video_page">
        <p><b>#manhcuongEntertaiment</b></p>
        <p>Tôi thật hối hận khi không biết tới dev front end Mạnh Cường sớm hơn, thật đáng tiếc huhuhu. Bởi vì anh ta
            quá là đỉnh đi mà huhuhu 😭😭😭 </p>
    </div>
    <div class="comment_video_page">
        <div class="info_comment_video_page">
            <img src="https://scontent.fhan3-2.fna.fbcdn.net/v/t1.15752-9/312107847_1196560997565728_8179199288161697139_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=JeuULjMZGO0AX_mqE76&_nc_ht=scontent.fhan3-2.fna&oh=03_AdRTjsav79Kck9Dmss5USy6wW1qmbTPVLgNGhvfDS4rknw&oe=6396E68D" alt="">
            <div class="text_logo_name_videos">
                <p>Hậu ăn cứt<i class='bx bxs-check-circle' style='color:#2e88ff'></i></p>
                <p>November 4 at 3:28 AM ~ <i class='bx bx-world'></i></p>
            </div>
        </div>
        <div class="value_comment_user">
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
          </p>
        </div>
    </div>
    <div class="input_comment">
      <form action="">
        <i class='bx bx-wink-smile'></i>
        <input type="text" required  placeholder="Thêm bình luận">
        <button type="submit"> Đăng</button>
      </form>
    </div>
  `;
  }
}
About_home(array_posts_user);