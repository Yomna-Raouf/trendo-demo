import "./PostHeader.css";
import { UserInfo } from "../UserInfo/UserInfo";

const PostHeader = ({ postData }) => {
  const calculatePostCreationDays = (date) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(date);
    const secondDate = new Date();
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays;
  };

  return (
    <div className="post__header">
      <div className="post__headerContainer">
        <div className="post__headerInfo">
          <UserInfo />
          <div className="post__headerCreatedAt">
            <p>
              منذ يومين
              {/* {calculatePostCreationDays(postData.created_at) === 0
                ? "today"
                : `${calculatePostCreationDays(postData.created_at)} days ago`} */}
            </p>
          </div>
        </div>
        <div>3 dots</div>
      </div>
    </div>
  );
};

export { PostHeader };
