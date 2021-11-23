import React, { useState } from "react";

import classes from "./LifeStyle.module.css";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MessageContainer from "../../components/MessageContainer/MessageContainer";

// Images
import Unlocked from "../../assets/unlocked.svg";
import Locked from "../../assets/locked.svg";
import PostUserImage2 from "../../assets/PostUserImage2.png";
import PostUserImage3 from "../../assets/PostUserImage3.png";
import PostUserImage4 from "../../assets/PostUserImage4.png";
import PostUserImage5 from "../../assets/PostUserImage5.png";
import PostUserImage6 from "../../assets/PostUserImage6.png";

const LifeStyle = ({ setIsMenu }) => {
  const [friend, setFriend] = useState(true);
  return (
    <div style={{ marginBottom: "3.31em" }}>
      <Header setIsMenu={setIsMenu} />
      <div className={`pt-2 flex flex-col`} style={{borderTop: "5px solid #E2E2E2"}}>
        <div
          className={`flex justify-center items-center pb-3 ${
            classes.LockButtonContainer
          } mx-3 ${friend ? "flex-row" : "flex-row-reverse"}`}
        >
          <button
            className={`bg-white ${classes.LockButton} flex justify-center items-center mx-3`}
          >
            <img src={Unlocked} alt="Locked" />
          </button>
          <div
            className={`bg-white ${classes.LockButton} flex justify-center items-center mx-3 relative`}
          >
            <img src={Locked} alt="Locked" />
            <div
              className={`bg-primary absolute right-1 top-1 ${classes.SmallDot}`}
            ></div>
          </div>
        </div>
        <div className={`flex justify-between items-center px-3 py-3`}>
          <button
            className={`h-14 w-full ${
              friend ? "bg-primary text-white" : "bg-white text-form"
            } font-roboto font-medium ${classes.FriendButton} mx-3`}
            onClick={() => setFriend(true)}
          >
            565 Friends
          </button>
          <button
            className={`h-14 w-full ${
              friend ? "bg-white text-form" : "bg-primary text-white"
            }  font-roboto font-medium ${classes.FriendButton} mx-3`}
            onClick={() => setFriend(false)}
          >
            65 Groups
          </button>
        </div>
        {friend ? (
          <div
            className={`flex flex-col px-4 ${classes.AllMessageContianer} pb-2`}
          >
            <MessageContainer
              userImage={PostUserImage2}
              username="A.J Kim"
              message="where are you."
              unread="2"
              date="6, nov"
            />
            <MessageContainer
              userImage={PostUserImage3}
              username="Gabriel Adams"
              message="When is the meeting going to hold?"
              unread="1"
              date="6, nov"
            />
            <MessageContainer
              userImage={PostUserImage4}
              username="Joy Emmanuel"
              message="good morning dear"
              date="6, nov"
            />
            <MessageContainer
              userImage={PostUserImage5}
              username="Abraham Jane"
              message="goog dear"
              date="6, nov"
            />
          </div>
        ) : (
          <div
            className={`flex flex-col px-4 ${classes.AllMessageContianer} pb-2`}
          >
            <MessageContainer
              userImage={PostUserImage6}
              username="Plateau Farmers"
              message="Agricultue for sustainace"
              unread="2"
              date="6, nov"
            />
            <MessageContainer
              userImage={PostUserImage3}
              username="Chain Breakers"
              message="Be Safe"
              unread="1"
              date="6, nov"
            />
            <MessageContainer
              userImage={PostUserImage4}
              username="Youth Movment"
              message="Secure the future"
              date="6, nov"
            />
            <MessageContainer
              userImage={PostUserImage5}
              username="Abraham Jane"
              message="goog dear"
              date="6, nov"
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LifeStyle;
