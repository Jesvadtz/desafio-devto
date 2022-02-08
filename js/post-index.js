const endpoint = "https://api-devto-default-rtdb.firebaseio.com/posts.json";

$("#postNewData").css("display", "none");
$(document).ready(function () {
  let postList = () => {
    fetch(endpoint, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((dataPost) => {
        console.log(dataPost);
        let keysPost = Object.keys(dataPost);
        console.log(keysPost);

        keysPost.forEach((postId) => {
          let post = dataPost[postId];
          console.log(post);

          // while (post.hasChildNodes()) {
          //   post.removeChild(post.lastChild);
          // }

          let titlePostList = post.title;
          let tagsPostList = post.tags;
          let datePostList = post.date;

          $("#postNewData").append($("<section/>"));
          $("#postNewData").css("display", "block");
          $("#titleNewData").text(titlePostList);
          $("#dateNewData").text(
            `Posted on ${new Date(datePostList).toLocaleString()}`
          );
          tagsPostList.forEach((tag) => {
            $("#tagsNewData").append($("<a/>").text(tag));
          });
        });
      });
  };
  postList();
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
      $("#imageNewData").attr({
        src: `${photoUser}`,
      });
    });
  namey.get(function (n) {
    $("#userNewData").text(n);
  });
});
