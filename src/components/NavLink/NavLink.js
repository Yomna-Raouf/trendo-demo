import "./NavLink.css";

const NavLink = ({ icon, linkText, active, userAvatar }) => {
  return (
    <div className="sideNav__itemContainer">
      <a href="/posts" className={`sideNav__item ${active}`}>
        <div className="sideNav__itemContent">
          <div className="sideNav__itemLogo">
            {userAvatar ? userAvatar : <img src={icon} alt="home" />}
          </div>
          <div className="sideNav__itemText">
            <p>{linkText}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export { NavLink };
