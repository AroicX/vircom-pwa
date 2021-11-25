import React from "react";

import classes from "./ChatHeader.module.css";

// Images
import Arrow from "../../assets/arrow.svg";
import DarkPhone from "../../assets/dark-phone.svg";
import DarkVideo from "../../assets/dark-video.svg";

const ChatHeader = ({ userImage, username }) => {
  return (
    <div className={`flex flex-col pt-6 ${classes.ChatHeaderContainer}`}>
      <div className={`flex justify-between items-center px-4`}>
        <div className={`flex justify-between items-center`}>
          <img src={Arrow} alt="Arrow" />
          <img src={userImage} alt="User" className={`mx-3`}/>
          <div className={`flex flex-col`}>
            <p className={`font-medium font-roboto text-lg text-secondary`}>
              {username}
            </p>
            <p
              className={`font-medium font-roboto text-secondary ${classes.CurrentStatus}`}
            >
              online
            </p>
          </div>
        </div>
        <div className={`flex items-center`}>
          <button
            className={`flex items-center justify-center mr-2 ${classes.MediaButton}`}
          >
            {" "}
            <img src={DarkPhone} alt="Phone" />
          </button>
          <button
            className={`flex items-center justify-center ${classes.MediaButton}`}
          >
            {" "}
            <img src={DarkVideo} alt="Video" />
          </button>
        </div>
      </div>
      <div className={`flex justify-center items-center`}>
        <p className={`text-primary text-center font-roboto ${classes.Typing}`}>Typing...</p>
      </div>
    </div>
  );
};

export default ChatHeader;
