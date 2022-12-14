
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
    name: "Bùi Mạnh Cường",
    title:
      "Bình minh đó nơi chúng ta đã tựa đầu vào vai nhau/Giờ này đã trở thành hoàng hôn buông xuống hai mái đầu",
    links:
      "src/img/35051507_1638728506249244_5583672499452772352_o.jpg.crdownload",
  },
  {
    id: 2,
    name: "Đặng văn Hậu",
    title:
      "Tôi thường không lên kế hoạch tỉ mỉ cho tất cả mọi thứ ngay từ bước ban đầu. Trái lại, tôi sẽ vừa làm vừa quan sát và rút kinh nghiệm.",
    links: "src/img/4k-programming-hello-world-text-tpiuwb02b1g2u7kb.jpg",
  },
  {
    id: 3,
    name: "Lê Sỹ Hải",
    title:
      "Bãi cát vàng còn mang sương ẩm nhè nhẹ lướt qua gót chân, tiếng sóng biển xì xào từ phía xa vẫy gọi. Tôi bước từng bước xuống dòng nước mát, cảm nhận ánh sáng bình minh chạm tới gót sen.",
    links: "src/img/5557920_CV.jpg",
  },
  {
    id: 4,
    name: "Đậu Phương Thảo",
    title:
      "Một chút nhớ dệt nên tương tư, một chút thương dệt nên vương vấn, đám mây trắng dệt nên bầu trời xanh.",
    links: "src/img/bi-quyet-chup-anh-hoang-hon-dep-Binhminhdigital(1).jpg",
  },
  {
    id: 5,
    name: "Nguyễn Viết Trọng",
    title:
      "Thà yêu một người bình thường để cảm thấy mình đặc biệt còn hơn là yêu một người quá đặc biệt để rồi bị cho là tầm thường.",
    links: "src/img/chup-anh-hoang-hon-bang-smartphone_800x450.jpg",
  },
  {
    id: 6,
    name: "Bùi Mạnh Cường",
    title:
      "Trong nhiếp ảnh có những khoảnh khắc tinh tế đến mức nó trở nên thật hơn cả bản thân thực tại đó",
    links: "src/img/images.jpg",
  },
  {
    id: 7,
    name: "Lê Sỹ Hải",
    title:
      "Vũ trụ này cân bằng đến nỗi chỉ việc bạn có một vấn đề cũng đã là dấu hiệu cho thấy có một giải pháp.",
    links: "src/img/Ngan-Ha25.jpg",
  },
];

// render content page 
 function Video_home(datavideohome) {
   let ListvideoHome = document.querySelector(".videos_page");
   if (ListvideoHome) {
     ListvideoHome.innerHTML = "";
     for (let item of datavideohome) {
       ListvideoHome.innerHTML += `
                   <div class="logo_name_videos_btn">
    
            <div class="logo_name_videos">
                <img src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-9/190108336_322648402555040_2100790391455013605_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DToGjk3hkasAX9wjEDD&_nc_ht=scontent.fhan2-1.fna&oh=00_AfDrshz1dpQG6f22a97d0X3EZUflybpE1t2KdKkECIi5tQ&oe=63960180"
                    alt="">
                <div class="text_logo_name_videos">
                    <p><a href="detail_video_user_other.html">Cristiano Ronaldo</a><i class='bx bxs-check-circle' style='color:#2e88ff'></i></p>
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
 }
 Video_home(array_user_detail);

 // render about home
 function About_home(dataabouthome) {
   let ListaboutHome = document.querySelector(".about_render_video");
   if (ListaboutHome) {
     ListaboutHome.innerHTML = "";
     for (let item of dataabouthome) {
       ListaboutHome.innerHTML += `
    <div class="logo_name_videos_btn">

        <div class="logo_name_videos">
            <img src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-9/190108336_322648402555040_2100790391455013605_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DToGjk3hkasAX9wjEDD&_nc_ht=scontent.fhan2-1.fna&oh=00_AfDrshz1dpQG6f22a97d0X3EZUflybpE1t2KdKkECIi5tQ&oe=63960180"
                alt="">
            <div class="text_logo_name_videos">
                <p><a href="detail_video_user_other.html">${item.name}</a><i class='bx bxs-check-circle' style='color:#2e88ff'></i></p>
                <p>November 4 at 3:28 AM ~ <i class='bx bx-world'></i></p>
            </div>
        </div>

        <div class="btn_logo_name_video">
            <!-- <input type="button" value="hello" id="test"> -->
            <button onclick="follow(this)" data-follow="1" class="btnFLLL">follow</button>
        </div>
    </div>
    <div class="links_video">
        <img src="${item.links}" width="66%" alt="">
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
        <p>${item.title}</p>
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
 }
 About_home(array_posts_user);

 // render video user

 function Vieo_detail(data) {
   let ListVideouser = document.querySelector(".Post_video_user_detail");
   if (ListVideouser) {
     ListVideouser.innerHTML = "";
     for (let item of data) {
       ListVideouser.innerHTML += `
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
   if (ListPosts) {
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

// click ++value view 

var clickvideoid = document.querySelectorAll(".video_user_detail");
var valueviewvideo = 0;
if (clickvideoid) {} 
var valueinner = clickvideoid["div"].innerHTML;
for (let i = 0; i < clickvideoid.length; i++) {
  // console.log(clickvideoid["div"]);
  clickvideoid[i].addEventListener("click", ()=>{
       valueviewvideo++;
       clickvideoid["div"].innerHTML = valueviewvideo;
    })
  };


// click play video
var videocentermini = document.querySelector(".video_center");
if (videocentermini) {
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
}

// event volumns video mini
var videoctvl = document.querySelector(".video_center");
if (videoctvl){
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
}
};

// ranger time video
var videocttime = document.querySelector(".video_center");
if (videocttime){
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

//  detail posts button
var mini_posts = document.querySelector("#product_sp");
if (mini_posts) {
  var unproduct = document.querySelector("#product_sp").style.display = "none";
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
var fromcmtpoosts = document.querySelector(".input_comment_user");
if (fromcmtpoosts){
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
console.log(checkcomment_ip());
checkcomment_ip();
}

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
