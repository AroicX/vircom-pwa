import React from "react";

import classes from "./Connect.module.css";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SuggestionContainer from "../../components/SuggestionContainer/SuggestionContainer";
import MessageContainer from "../../components/MessageContainer/MessageContainer";

// Images
import PostUserImage2 from "../../assets/PostUserImage2.png"
import PostUserImage3 from "../../assets/PostUserImage3.png"
import PostUserImage4 from "../../assets/PostUserImage4.png"
import PostUserImage5 from "../../assets/PostUserImage5.png"

const Connect = () => {
  return (
    <div style={{ marginBottom: "3.31em" }}>
      <Header />
      <div className={`flex flex-col`}>
        <div className={`flex flex-col ${classes.AllSuggestionContainer}`}>
          <h2
            className={`font-roboto font-medium text-secondary text-2xl pl-5 mt-4`}
          >
            Suggestion
          </h2>
          <div className={`flex items-center overflow-x-auto py-6 w-full`}>
            <SuggestionContainer username="A.J Kim" friend />
            <SuggestionContainer username="Plateau fammers" />
            <SuggestionContainer username="A.J Kim" friend />
            <SuggestionContainer username="Plateau fammers" />
          </div>
        </div>
        <div className={`flex justify-between items-center px-3 py-3`}>
          <button
            className={`h-14 w-full bg-primary text-white font-roboto font-medium ${classes.FriendButton} mx-3`}
          >
            565 Friends
          </button>
          <button
            className={`h-14 w-full 
              bg-white text-form font-roboto font-medium ${classes.FriendButton} mx-3`}
          >
            65 Groups
          </button>
        </div>
        <div className={`flex flex-col px-4 ${classes.AllMessageContianer} pb-2`}>
            <MessageContainer
              userImage={PostUserImage2}
              username="A.J Kim"
              message="where are you."
              date="online"
            />
            <MessageContainer
              userImage={PostUserImage3}
              username="Gabriel Adams"
              message="When is the meeting going to hold?"
              date="online"
            />
            <MessageContainer
              userImage={PostUserImage4}
              username="Joy Emmanuel"
              message="good morning dear"
            />
            <MessageContainer
              userImage={PostUserImage5}
              username="Abraham Jane"
              message="goog dear"
            />
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Connect;
