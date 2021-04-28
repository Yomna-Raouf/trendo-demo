import "./PostBody.css";

const PostBody = () => {
  return (
    <div className="post__body">
      <div className="post__bodyText">Happy Hacking!!</div>
      <div className="post__bodyMood">Happy</div>
      <div className="post__bodyHashtags">
        <p>#hashtag</p>
      </div>
      <div className="post__bodyImages">
        <img src="https://reactjs.org/logo-og.png" alt="test" />
      </div>
    </div>
  );
};

export { PostBody };
