export const postReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE":
      state = action.postsData;
      return state;
    case "CREATE_POST":
      let newPost = CreatePost(action.post);
      console.log(newPost);
      console.log([...state, newPost]);
      return [...state, newPost];
    case "UPDATE_POST":
      let postsData = UpdatePost(action.postData);
      console.log(postsData);
      return postsData;
    case "DELETE_POST":
      return DeletePost(action.id, state);
    case "LIKE_UNLIKE_POST":
      return state;
    default:
      return state;
  }
};

// DELETE POST ACTION
const DeletePost = async (id, posts) => {
  try {
    const response = await fetch(`http://15.237.2.25/api/v1/posts/${id}`, {
      method: "delete",
      headers: {
        "content-type": "application/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMzQsImRldmljZSI6NjE0LCJleHAiOjQ3NzMyNTEyNzR9.iQh5A3cKP1gMW5r9Xbb-AJuFOysZCkjJ6hRFJmJnhcw",
      },
      body: JSON.stringify({ id }),
    });

    const { message } = await response.json();
    console.log(message);

    const data = posts.filter((post) => post.id !== id);
    console.log(data);
    if (message === "Success") return data;
  } catch (err) {
    console.log(err.message);
  }
};

// CREATE POST ACTION
const CreatePost = async (post) => {
  try {
    const response = await fetch(`http://15.237.2.25/api/v1/posts/create`, {
      method: "post",
      headers: {
        "content-type": "application/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMzQsImRldmljZSI6NjE0LCJleHAiOjQ3NzMyNTEyNzR9.iQh5A3cKP1gMW5r9Xbb-AJuFOysZCkjJ6hRFJmJnhcw",
      },
      body: JSON.stringify({
        body: post.body,
        hashtags: post.hashtags,
        photos: post.photos,
      }),
    });

    const postData = await response.json();
    console.log(postData.data.post);
    return postData.data.post;
  } catch (err) {
    console.log(err.message);
  }
};

// UPDATE POST ACTION
const UpdatePost = async (postData) => {
  try {
    const response = await fetch(
      `http://15.237.2.25/api/v1/posts/${postData.id}/update`,
      {
        method: "put",
        headers: {
          "content-type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMzQsImRldmljZSI6NjE0LCJleHAiOjQ3NzMyNTEyNzR9.iQh5A3cKP1gMW5r9Xbb-AJuFOysZCkjJ6hRFJmJnhcw",
        },
        body: JSON.stringify({
          id: postData.id,
          body: postData.postBody,
        }),
      }
    );

    const { message } = await response.json();
    console.log(message);
  } catch (err) {
    console.log(err.message);
  }
};
