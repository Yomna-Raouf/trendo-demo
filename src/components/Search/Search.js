import "./Search.css";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  return (
    <div className="search">
      <div className="search__icon">
        <SearchIcon />
      </div>
      <InputBase
        placeholder="ابحث عن مستخدم , غرفة , دورة , هاشتاج"
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};

export { Search };
