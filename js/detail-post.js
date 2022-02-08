const endpoint = "https://api-devto-default-rtdb.firebaseio.com/posts/";

let postId = null;
const searchString = window.location.search;
const params = new URLSearchParams(searchString);
console.log("params", params);
if (params.has("idPost")) {
  postId = params.get("idPost");
}

$(document).ready(function () {
  //Paint posts in detail-post
  let paintPost = () => {
    fetch(`${endpoint}${postId}.json`, {
      method: "GET",
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);

        let titlePostNew = data.title;
        let formTextPostNew = data.textPost;
        let tagsPostNew = [];
        if (data.tags) {
          tagsPostNew = data.tags;
        }
        let datePostNew = data.date;
        // datePostNew.toDateString();

        $("#titlePostNew").text(titlePostNew);
        $("#formTextPostNew").text(formTextPostNew);
        $("#datePostNew").text(
          `Posted on ${new Date(datePostNew).toLocaleString()}`
        );
        tagsPostNew.forEach((tag) => {
          $("#tagsNew").append($("<a/>").text(tag));
        });
      });
  };
  $("#editPost").click(() => {
    window.location.replace(`new-post.html?idPost=${postId}`);
  });
  $("#homePost").click(() => {
    window.location.replace(`index.html`);
  });
  paintPost();
});

//API images and names
$(document).ready(function () {
  fetch(`https://api.pexels.com/v1/search?query=nature&orientation=portrait`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let photoUser = data.photos[7].src.portrait;
      let photoHeader = data.photos[1].src.portrait;
      console.log(photoUser);
      $("#imgUser").attr({
        src: `${photoUser}`,
      });
      $("#imgHeader").attr({
        src: `${photoHeader}`,
      });
    });
  namey.get(function (n) {
    $("#nameUser").text(n);
  });
});
