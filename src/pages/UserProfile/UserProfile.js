import React from "react";

import classes from "./UserProfile.module.css";

// Components
import Footer from "../../components/Footer/Footer";
import SinglePost from "../../components/SinglePost/SinglePost";

// Images
import Header from "../../assets/header2.png";
import Avatar from "../../assets/avatar3.png";
import Chat from "../../assets/chat.svg";
import Media from "../../assets/media.svg";
import PostedImage from "../../assets/PostedImage3.png";
import PostUserImage from "../../assets/PostUserImage2.png";

const UserProfile = () => {
  return (
    <div style={{ marginBottom: "3.31em" }}>
      <div className={`flex flex-col`}>
        <div
          className={`w-full flex justify-center items-center relative mb-12 ${classes.HeaderContainer} `}
          style={{ backgroundImage: `url(${Header})` }}
        >
          <img src={Avatar} alt="Avatar" className={`absolute top-9`} />
        </div>
        <div className={`flex flex-col justify-center items-center`}>
          <h3
            className={`font-medium font-roboto text-2xl text-secondary text-center`}
          >
            A.J. Kim
          </h3>
          <p className={`font-roboto text-form text-center ${classes.Status}`}>
            The Lord Reign, Blessed Be His Name, Let The Rock Of My Salvation Be
            Exulted
          </p>
        </div>
        <div
          className={`mx-3 px-5 flex items-center justify-between mt-4 pb-2 ${classes.ProfileOptionContainer}`}
        >
          <div className={`flex items-center`}>
            <img src={Chat} alt="Activity" className={`mr-2`} />
            <p className={`font-roboto font-medium text-form text-sm`}>Chat</p>
          </div>
          <div className={`flex items-center`}>
            <img src={Media} alt="Media" className={`mr-2`} />
            <p className={`font-roboto font-medium text-form text-sm`}>Media</p>
          </div>
          <div className={`flex items-center`}>
            <button
              className={`bg-primary text-white font-roboto ${classes.FollowButton}`}
            >
              folowing
            </button>
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

export default UserProfile;
