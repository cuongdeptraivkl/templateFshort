// render video home

function Posts_video_home(datavideohome) {
  const Listvideo = document.querySelector(".links_video");
  Listvideo.innerHTML = "";
  for (let item of datavideohome) {
    Listvideo.innerHTML += `
            <video width="50%" height="60%" preload=""  controls type="video/mp4" loop
            src="${item.link}`;
  }
}
Posts_video_home(array_user_detail);
