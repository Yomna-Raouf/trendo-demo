import { useReducer, useEffect } from "react";
import { PostContext } from "../context/PostContext";
import { postReducer } from "../reducers/postReducer";

const PostContextProvider = ({ children }) => {
  // const [posts, setPosts] = useState([]);

  const [postsData, dispatch] = useReducer(postReducer, []);

  useEffect(() => {
    const getPostsData = async () => {
      try {
        const response = await fetch("http://15.237.2.25/api/v1/home/posts", {
          method: "get",
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMzQsImRldmljZSI6NjE0LCJleHAiOjQ3NzMyNTEyNzR9.iQh5A3cKP1gMW5r9Xbb-AJuFOysZCkjJ6hRFJmJnhcw",
          },
        });
        const postsData = await response.json();

        // setPosts(postsData.data.posts);
        dispatch({ type: "INITIALIZE", postsData: postsData.data.posts });
      } catch (err) {
        console.log(err);
      }
    };

    getPostsData();
  }, []);

  return (
    <PostContext.Provider value={{ postsData, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
