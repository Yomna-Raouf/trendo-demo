import "./SideNav.css";
import logo from "../../assets/trendo.png";
import { Icons } from "../../utilities/Helper/icons";
import { NavLink } from "../NavLink/NavLink";
import { Avatar } from "../Avatar/Avatar";

const SideNav = () => {
  return (
    <div className="sideNav">
      <div className="sideNav__container">
        <div className="sideNav__logo">
          <img src={logo} alt="trendo logo" />
        </div>

        <NavLink active={"active"} icon={Icons.home} linkText={"المنشورات"} />
        <NavLink icon={Icons.trending} linkText={"الشائع"} />
        <NavLink icon={Icons.rooms} linkText={"الغرف"} />
        <NavLink icon={Icons.course} linkText={"الدورات"} />
        <NavLink icon={Icons.groups} linkText={"المجموعات"} />
        <NavLink icon={Icons.notification} linkText={"الاشعارات"} />
        <NavLink icon={Icons.chat} linkText={"الرسائل"} />
        <NavLink
          userAvatar={
            <Avatar
              width={"33px"}
              height={"33px"}
              cx={"16px"}
              cy="16px"
              r={"15px"}
            />
          }
          icon={Icons.chat}
          linkText={"الملف الشخصي"}
        />
        <NavLink icon={Icons.setting} linkText={"الاعدادات"} />
      </div>
    </div>
  );
};

export { SideNav };
