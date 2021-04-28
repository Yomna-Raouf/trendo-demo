import AddPostButton from "../Buttons/AddPostButton/AddPostButton";
import "./HomeHeader.css";

const HomeHeader = () => {
  return (
    <div className="HomeHeader">
      <div>
        <h2>المنشورات</h2>
      </div>
      <div>
        <AddPostButton />
      </div>
    </div>
  );
};

export { HomeHeader };
