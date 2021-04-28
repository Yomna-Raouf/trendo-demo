import { ShowAllSuggestionsButton } from "../Buttons/ShowAllSuggestionsButton/ShowAllSuggestionsButton";
import { FollowSuggestion } from "../FollowSuggestion/FollowSuggestion";
import "./FollowSuggestionsList.css";

const FollowSuggestionsList = () => {
  return (
    <div className="FollowSuggestionsList">
      <div className="FollowSuggestionsList__container">
        <div className="FollowSuggestionsList__Header">
          <p>اقتراحات المتابعة</p>
        </div>
        <div className="FollowSuggestionsList__list">
          <FollowSuggestion />
          <FollowSuggestion />
          <FollowSuggestion />
          <FollowSuggestion />
          <FollowSuggestion />
          <FollowSuggestion />
          <FollowSuggestion />
          <FollowSuggestion />
        </div>
        <ShowAllSuggestionsButton />
      </div>
    </div>
  );
};

export { FollowSuggestionsList };
