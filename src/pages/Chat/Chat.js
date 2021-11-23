import React from "react";

import classes from "./Chat.module.css";

// Components
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import ChatContainer from "../../components/ChatContainer/ChatContainer";
import ChatFooter from "../../components/ChatFooter/ChatFooter";

// Images
import UserImage from "../../assets/PostUserImage2.png";
import Locked from "../../assets/locked.svg";
import Unlocked from "../../assets/unlocked.svg";
import GreenPhone from "../../assets/green-phone.svg";
import RedVideo from "../../assets/red-video.svg";

const Chat = () => {
  return (
    <div style={{marginBottom: "5em"}}>
      <ChatHeader userImage={UserImage} username="A.J Kim" />
      <div className={`flex flex-col`}>
        <div
          className={`flex justify-around mx-auto my-4 p-1 ${classes.LockContainer}`}
        >
          <button className={`flex justify-center items-center w-full`}>
            <img src={Unlocked} alt="Unlocked" />
          </button>
          <button
            className={`flex justify-center items-center w-full ${classes.Locked}`}
          >
            <img src={Locked} alt="locked" />
          </button>
        </div>
        <p
          className={`text-center font-roboto font-medium text-secondary mx-4 ${classes.Day}`}
        >
          Yesterday
        </p>
        <div className={`w-full`}>
          <div className={`mx-4`}>
            <ChatContainer message="Where are you?" time="12:00am" />
          </div>
          <div className={`mx-4`}>
            <ChatContainer
              message="Call me when you get this"
              time="12:05am"
              sent
            />
          </div>
        </div>
        <p
          className={`text-center font-roboto font-medium text-secondary mx-4 ${classes.Day}`}
        >
          Today
        </p>
        <div
          className={`flex justify-between items-center mr-4 ml-auto px-4 my-4 ${classes.Call}`}
        >
          <img src={GreenPhone} alt="Phone" />
          <p className={`font-roboto font-medium ${classes.Time}`}>12:00am</p>
        </div>
        <div
          className={`flex flex-col py-2 px-3 ml-4 ${classes.VideoContainer}`}
        >
          <div className={`flex justify-between items-center`}>
            <img src={RedVideo} alt="Video" />
            <p className={`text-secondary font-roboto ${classes.Video}`}>
              Missed video call
            </p>
          </div>
          <p className={`font-roboto font-medium ml-auto ${classes.VideoTime}`}>
            12:00am
          </p>
        </div>
        <div className={`w-full`}>
          <div className={`mx-4`}>
            <ChatContainer message="Where are you?" time="12:00am" />
          </div>
          <div className={`mx-4`}>
            <ChatContainer
              message="Call me when you get this"
              time="12:05am"
              sent
            />
          </div>
        </div>
      </div>
      <ChatFooter />
    </div>
  );
};

export default Chat;
