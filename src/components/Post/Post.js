import { PostBody } from "../PostBody/PostBody";
import { PostFooter } from "../PostFooter/PostFooter";
import { PostHeader } from "../PostHeader/PostHeader";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <PostHeader />
      <PostBody />
      <PostFooter />
    </div>
  );
};

export { Post };
