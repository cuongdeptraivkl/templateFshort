// render video 

function Vieo_detail(data) {
  let ListVideo = document.querySelector(".Post_video_user_detail");
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
Vieo_detail(array_user_detail);


