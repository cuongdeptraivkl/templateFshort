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

var commnent = document.querySelector(".user_comment_box");
  if (commnent){
   commnent.style.display = "none";
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
if 

// render video user

function Vieo_detail(data) {
  let ListVideo = document.querySelector(".Post_video_user_detail");
  if (ListVideo) {
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