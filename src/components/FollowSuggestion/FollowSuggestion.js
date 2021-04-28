import "./FollowSuggestion.css";
import { FollowUnFollowButton } from "../Buttons/FollowUnFollowButton/FollowUnFollowButton";
import { UserInfo } from "../UserInfo/UserInfo";

const FollowSuggestion = () => {
  return (
    <div className="FollowSuggestion">
      <UserInfo />
      <FollowUnFollowButton />
    </div>
  );
};

export { FollowSuggestion };
