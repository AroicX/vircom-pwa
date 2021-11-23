import React from "react";
import classes from "./Post.module.css";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BigButton from "../../components/UI/Buttons/BigButton/BigButton";

// Images
import UserImage from "../../assets/PostUserImage.png";
import Picture from "../../assets/Picture.svg";
import Video from "../../assets/video.svg";
import Location from "../../assets/location.svg";
import Tag from "../../assets/tag.svg";

const Post = ({ setIsMenu }) => {
  return (
    <div style={{ marginBottom: "3.31em" }}>
      <Header setIsMenu={setIsMenu} />
      <div className={`flex flex-col`} style={{borderTop: "5px solid #E2E2E2"}}>
        <div className={`flex items-center py-4 px-5`}>
          <img src={UserImage} alt="User" className={"mr-5"} />
          <p
            className={`font-roboto font-medium text-secondary ${classes.Username}`}
          >
            Elijah Gabriel
          </p>
        </div>
        <textarea
          className={`mx-5 font-roboto font-medium outline-none ${classes.Textarea}`}
          placeholder="What do you want to say"
          rows={10}
        ></textarea>
        <div
          className={`flex flex-col py-4 mx-2 ${classes.PostOptionContainer}`}
        >
          <div className={`flex items-center px-3 pb-4`}>
            <div className={`flex justify-center items-center mr-12`}>
              <img src={Picture} alt="Add" />
            </div>
            <p
              className={`font-medium font-roboto text-form ${classes.OptionText}`}
            >
              Add picture
            </p>
          </div>
          <div className={`flex items-center px-3 pb-4`}>
            <div className={`flex justify-center items-center mr-12`}>
              <img src={Video} alt="Video" />
            </div>
            <p
              className={`font-medium font-roboto text-form ${classes.OptionText}`}
            >
              Add video
            </p>
          </div>
          <div className={`flex items-center px-3 pb-4`}>
            <div className={`flex justify-center items-center mr-12`}>
              <img src={Location} alt="Location" />
            </div>
            <p
              className={`font-medium font-roboto text-form ${classes.OptionText}`}
            >
              Add location
            </p>
          </div>
          <div className={`flex items-center px-3 pb-4`}>
            <div className={`flex justify-center items-center mr-12`}>
              <img src={Tag} alt="Tag" />
            </div>
            <p
              className={`font-medium font-roboto text-form ${classes.OptionText}`}
            >
              Tag Someone
            </p>
          </div>
        </div>
        <div className={`px-5 mb-14`}>
          <BigButton value="Post" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Post;
