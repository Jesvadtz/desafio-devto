const endpoint = "https://api-devto-default-rtdb.firebaseio.com/posts.json";

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

          let titlePostList = post.title;
          let tagsPostList = post.tags;
          let descPostList = post.formText;
          let datePostList = post.date;
        });
      });
  };
  postList();
});
