import { AddCommentActivity } from "../PostActivities/AddCommentActivity/AddCommentActivity";
import { LikeActivity } from "../PostActivities/LikeActivity/LikeActivity";
import { RepostActivity } from "../PostActivities/RepostActivity/RepostActivity";
import { SharePostActivity } from "../PostActivities/SharePostActivity/SharePostActivity";
import "./PostFooter.css";

const PostFooter = () => {
  return (
    <div className="post__footer">
      <div className="post__footerActivities">
        <div className="post__footerActivitiesLike">
          <LikeActivity />
        </div>
        <div className="post__footerActivitiesRepost">
          <RepostActivity />
        </div>
        <div className="post__footerActivitiesComments">
          <AddCommentActivity />
        </div>
        <div className="post__footerActivitiesShare">
          <SharePostActivity />
        </div>
      </div>
    </div>
  );
};

export { PostFooter };
