// render video home

function Posts_video_home(datavideohome) {
  let ListvideoHome = document.querySelector(".videos_page");
  ListvideoHome.innerHTML = "";
  for (let item of datavideohome) {
    console.log(item.link);
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
