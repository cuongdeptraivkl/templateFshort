///////////////////// scroll play video//////////////////////
var link_video = document.getElementsByClassName('links_video');
if (link_video) {
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

// =============== visibility =============//



// const videoss = document.getElementById("videotest");
 
// document.addEventListener("visibilitychange", function () {
//     if (document["hidden"]) {
//         document.classList.remove("link_video")
//     } else {
//       document.classList.add("link_video");
//     }
// });
// ============== load=================//
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {

    document.body.removeChild("loader");

  })
});



const TextLoadervd = document.getElementById("text_loader");
TextLoadervd.classList.add("text_loader_hidden");
const LogoHeader = document.getElementById("logo_loader");
LogoHeader.classList.add("logo_loader_hidden");




function submitForm(event) {
  event.preventDefault();
  var ele = document.getElementById("valueInput");
  var elefile = document.getElementById("valuefile");
  let x = document.getElementById("text_loader");
  if (elefile.value != "" && ele.value != "") {
    test();
    elefile.value = "";
    ele.value = "";
  } else {
    alert("nhập cmm vào cu ạ");
  }
}

function submitFormNews(event) {
  event.preventDefault();
  var elenews = document.getElementById("valueInputNews");
  var elefilenews = document.getElementById("valueFileNews");
  if (elenews.value != "" && elefilenews.value != "") {
    News();
    elenews.value = "";
    elefilenews.value = "";
  } else {
    alert("nhập cmm vào cu ạ");
  }
}

function News() {
  alert('hello');
  const TextLoadervd = document.getElementById("text_loader");
  const LogoHeader = document.getElementById("logo_loader");
  const loader = document.querySelector(".loader");
  let x = document.getElementById("text_loader");

  //    document.body.appendChild(loader);
  loader.classList.remove("loader-hidden");
  TextLoadervd.classList.remove("text_loader_hidden");
  LogoHeader.classList.remove("logo_loader_hidden");


  setTimeout(function () { x.innerHTML = "Đang duyệt" }, 100);
  setTimeout(function () { x.innerHTML = "Đang đăng . . ." }, 2000);
  setTimeout(function () { x.innerHTML = "Đã đăng ! ! !" }, 5000);
  setTimeout(function () {

    x.classList.add("text_loader_hidden");
    loader.classList.add("loader-hidden");
    LogoHeader.classList.add("logo_loader_hidden");
    postnews();
  }, 6000);
  // setTimeout(function () {loader.classList.add("loader-hidden")},6000);
}

function test() {
  alert('hello');
  const TextLoadervd = document.getElementById("text_loader");
  const LogoHeader = document.getElementById("logo_loader");
  const loader = document.querySelector(".loader");
  let x = document.getElementById("text_loader");

  //    document.body.appendChild(loader);
  loader.classList.remove("loader-hidden");
  TextLoadervd.classList.remove("text_loader_hidden");
  LogoHeader.classList.remove("logo_loader_hidden");


  setTimeout(function () { x.innerHTML = "Đang duyệt" }, 100);
  setTimeout(function () { x.innerHTML = "Đang đăng . . ." }, 2000);
  setTimeout(function () { x.innerHTML = "Đã đăng ! ! !" }, 5000);
  setTimeout(function () {

    x.classList.add("text_loader_hidden");
    loader.classList.add("loader-hidden");
    LogoHeader.classList.add("logo_loader_hidden");
    postvd();
  }, 6000);
  // setTimeout(function () {loader.classList.add("loader-hidden")},6000);
}