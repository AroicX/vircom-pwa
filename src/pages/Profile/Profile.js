import React from "react";

import classes from "./Profile.module.css";

// Components
import Footer from "../../components/Footer/Footer";
import SinglePost from "../../components/SinglePost/SinglePost";

// Images
import UserImage from "../../assets/PostUserImage.png";
import Header from "../../assets/header.png";
import Avatar from "../../assets/avatar.png";
import Media from "../../assets/media.svg";
import Activity from "../../assets/activity.svg";
import Edit from "../../assets/edit.svg";

const Profile = () => {
  return (
    <div style={{ marginBottom: "3.31em" }}>
      <div className={`flex flex-col pb-4 ${classes.ProfileDetailContainer}`}>
        <div
          className={`w-full flex justify-center items-center relative mb-16 ${classes.HeaderContainer} `}
          style={{ backgroundImage: `url(${Header})` }}
        >
          <img src={Avatar} alt="Avatar" className={`absolute top-8`} />
        </div>
        <div className={`flex justify-center items-center`}>
          <p className={`font-roboto text-form text-center ${classes.Status}`}>
            The Lord Reign, Blessed Be His Name, Let The Rock Of My Salvation Be
            Exulted
          </p>
        </div>
        <div
          className={`mx-5 flex items-center justify-between mt-4 pb-2 ${classes.ProfileOptionContainer}`}
        >
          <div className={`flex items-center`}>
            <img src={Activity} alt="Activity" className={`mr-2`} />
            <p className={`font-roboto font-medium text-form text-sm`}>
              Activity Log
            </p>
          </div>
          <div className={`flex items-center`}>
            <img src={Media} alt="Media" className={`mr-2`} />
            <p className={`font-roboto font-medium text-form text-sm`}>Media</p>
          </div>
          <div className={`flex items-center`}>
            <img src={Edit} alt="Edit Profile" className={`mr-2`} />
            <p className={`font-roboto font-medium text-form text-sm`}>
              Edit Profile
            </p>
          </div>
        </div>
      </div>
      <SinglePost
        username="Elijah Gabriel"
        userImage={UserImage}
        date="Just now"
      />
      <Footer />
    </div>
  );
};

export default Profile;
