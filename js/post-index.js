const endpoint = "https://api-devto-default-rtdb.firebaseio.com/posts.json";

$("#postNewData").css("display", "none");

$(document).ready(function () {
  let postList = () => {
    fetch(endpoint, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((dataPost) => {
        // console.log(dataPost);
        let keysPost = Object.keys(dataPost);
        console.log(keysPost);

        keysPost.forEach((postId) => {
          let post = dataPost[postId];
          console.log(post);
          let tags = "";
          if (post.tags) {
            tags = post.tags;
          }
          namey.get((nameUser) => {
            $("#divContainerPost").append(
              postElement(nameUser, post.date, postId, post.title, tags)
            );
          });
        });
      });
  };
  postList();
});

//API images and names
// $(document).ready(async function () {
//   fetch(`https://api.pexels.com/v1/search?query=nature&orientation=portrait`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       let photoUser = data.photos[7].src.portrait;
//       console.log(photoUser);
//       $("#imageNewData").attr({
//         src: `${photoUser}`,
//       });
//     });
// });

//Function to create post
const postElement = (name, date, idPost, title, tags) => {
  let cardPost = $(`<section id="postNewData" class="card card-post p-3 mt-3">
          <div class="devcard-header d-flex align-items-start justify-content-between">
            <div class="card-user d-flex ps-3 align-items-center">
              <img id="imageNewData" alt="" width="32" height="32" class="me-2 rounded-circle">
              <div class="user-name d-flex flex-column">
                <p id="userNewData" class="mb-0">${name}
                </p>
                <p id="dateNewData" class="user-date text-secondary mb-0">Posted on ${new Date(
                  date
                ).toLocaleString()}</p>
              </div>
            </div>
            <div class="devcard-pin d-flex align-items-center pe-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24" aria-hidden="true"
                class="mr-1 align-text-bottom color-accent-brand me-2" fill="#3B49DF">
                <path
                  d="M22.314 10.172l-1.415 1.414-.707-.707-4.242 4.242-.707 3.536-1.415 1.414-4.242-4.243-4.95 4.95-1.414-1.414 4.95-4.95-4.243-4.242 1.414-1.415L8.88 8.05l4.242-4.242-.707-.707 1.414-1.415z">
                </path>
              </svg>
              <span class="text-secondary">Pinned</span>
            </div>
          </div>
          <div class="devcard-main p-3">
            <a "class="text-decoration-none btn ps-0" href="../pages/detail-post.html?idPost=${idPost}" style="text-decoration: none;">
              <h2 id="titleNewData" class="text-black fw-bold">${title}
              </h2>
            </a>
            <div id="tagsNewData" class="devcard-tags mb-2">${tags}
            </div>
          </div>
          <div class="devcard-footer bg-white d-flex justify-content-between align-items-center ps-3">
            <div class="d-flex gap-2">
              <a href="#" class="text-decoration-none">
                <button class="devcard-likes btn ps-0">
                  <img src="assets/svg/icon-heart.svg" alt="Likes icon" />
                  <span>0 reactions</span>
                </button>
              </a>
              <a href="#" class="text-decoration-none">
                <button class="devcard-comments btn ps-0">
                  <img src="assets/svg/iccon-comment.svg" alt="Comment icon" />
                  <span>0 comments</span>
                </button>
              </a>
            </div>
            <div class="card-read d-flex align-items-center pe-3">
              <span class="me-2 text-secondary">2 min read</span>
              <button class="btn btn-secondary text-light">Save</button>
            </div>
          </div>
        </section>`);
  return cardPost;
};
