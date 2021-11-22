import React from "react";

import classes from "./Group.module.css";

// Components
import Footer from "../../components/Footer/Footer";
import SinglePost from "../../components/SinglePost/SinglePost";

// Images
import Header from "../../assets/header2.png";
import Avatar from "../../assets/avatar2.png";
import Chat from "../../assets/chat.svg";
import Media from "../../assets/media.svg";
import PostedImage from "../../assets/PostedImage3.png";
import PostUserImage from "../../assets/PostUserImage2.png";
import Post from "../../assets/post2.svg";

const Group = () => {
  return (
    <div style={{ marginBottom: "3.31em" }}>
      <div className={`flex flex-col`}>
        <div
          className={`w-full flex justify-center items-center relative mb-7 ${classes.HeaderContainer} `}
          style={{ backgroundImage: `url(${Header})` }}
        >
          <img src={Avatar} alt="Avatar" className={`absolute top-12`} />
        </div>
        <div className={`flex flex-col justify-center items-center`}>
          <h3
            className={`font-medium font-roboto text-2xl text-secondary text-center`}
          >
            Plateau Farmers
          </h3>
          <p
            className={`font-roboto text-secondary font-medium text-center ${classes.Status}`}
          >
            Agricultue for sustainace
          </p>
          <button
            className={`bg-primary text-white font-roboto font-medium mt-3 ${classes.FollowButton}`}
          >
            Following
          </button>
        </div>
        <div
          className={`mx-3 px-5 flex items-center justify-between mt-5 pb-2 ${classes.ProfileOptionContainer}`}
        >
          <div className={`flex items-center`}>
            <img src={Chat} alt="Activity" className={`mr-2`} />
            <p className={`font-roboto font-medium text-form text-sm`}>Chat</p>
          </div>
          <div className={`flex items-center`}>
            <img src={Post} alt="Media" className={`mr-2`} />
            <p className={`font-roboto font-medium text-form text-sm`}>
              Make a Post
            </p>
          </div>
          <div className={`flex items-center`}>
            <img src={Media} alt="Media" className={`mr-2`} />
            <p className={`font-roboto font-medium text-form text-sm`}>Media</p>
          </div>
        </div>
      </div>
      <SinglePost
        userImage={PostUserImage}
        username="A.J Kim"
        postedImage={PostedImage}
        date="Just now"
      />
      <Footer />
    </div>
  );
};

export default Group;
