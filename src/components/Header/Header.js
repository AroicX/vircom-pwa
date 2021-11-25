import React from "react";

import classes from "./Header.module.css";
import { IoMdNotifications } from "react-icons/io";
import UserImage from "../../assets/user-image.png";
import Search from "../UI/Search/Search";

const Header = ({setIsMenu}) => {
  return (
    <div className={`flex items-center justify-between pt-10 px-6 pb-2 ${classes.HeaderContainer}`}>
      <div onClick={()=>setIsMenu(true)} className={`flex flex-col items-center mr-4`}>
        <img src={UserImage} alt="User Profile" />
        <div className={`flex justify-between items-center pt-1`}>
          <div className={`h-1 w-1 ${classes.SmallDot}`}></div>
          <div className={`h-1 w-1 ${classes.SmallDot}`}></div>
          <div className={`h-1 w-1 ${classes.SmallDot}`}></div>
        </div>
      </div>
      <Search />
      <div className="flex justify-center items-center relative mr-1">
        <IoMdNotifications className={`text-primary ${classes.Notification}`} />
        <div
          className={`flex justify-center items-center bg-white absolute top-0 ${classes.DotContainer}`}
        >
          <div className={`bg-primary ${classes.Dot}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
