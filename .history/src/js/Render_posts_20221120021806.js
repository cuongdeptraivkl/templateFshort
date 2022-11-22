function Posts_user(datauser) {
  let ListPosts = document.querySelector(".Posts_user");
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

