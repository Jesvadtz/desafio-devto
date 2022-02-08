const endpoint = "https://api-devto-default-rtdb.firebaseio.com/posts";

//Save Post
const savePost = (title, tags, textPost, postId) => {
  let newPost = {
    title: title,
    tags: tags,
    textPost: textPost,
    date: new Date(),
  };
  const method = postId ? "PUT" : "POST";
  const url = postId ? `${endpoint}/${postId}.json` : `${endpoint}.json`;

  fetch(`${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  })
    .then((response) => response.json())
    .then((data) => {
      if (postId) {
        window.location.replace(`detail-post.html?idPost=${postId}`);
      } else {
        let idNamePost = data.name;
        console.log(idNamePost);
        window.location.replace(`detail-post.html?idPost=${idNamePost}`);
      }
    });
};

//Delete post
const deletePost = (postId) => {
  fetch(`${endpoint}/${postId}.json`, {
    method: "DELETE",
  }).then((response) => {
    window.location.replace("/");
  });
};

$(document).ready(function () {
  //Get ID post
  let postId = null;
  const params = new URLSearchParams(window.location.search);
  if (params.has("idPost")) {
    postId = params.get("idPost");
  }
  console.log(postId);

  if (postId) {
    $("#deletePost").click((e) => {
      e.preventDefault();
      deletePost(postId);
    });
  } else {
    $("#deletePost").click((e) => {
      e.preventDefault();
      window.location.replace("/");
    });
  }
  //Function edit post
  if (postId) {
    fetch(`${endpoint}/${postId}.json`, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        let title = data.title;
        let desc = data.textPost;
        let tags = data.tags;

        $("#titleText").val(title);
        $("#formText").val(desc);
        $("#hashtag").val(tags);
      });
  }

  //Save post to database
  $("#publishPost").click((e) => {
    e.preventDefault();
    const titleText = $("#titleText").val();
    const tagsString = $("#hashtag").val();
    const tagsArray = tagsString.split(/,\s*/);
    tagsArray.pop();
    const formText = $("#formText").val();

    savePost(titleText, tagsArray, formText, postId);
  });
});
