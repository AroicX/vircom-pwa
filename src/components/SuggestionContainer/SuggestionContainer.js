import React from "react";

import classes from "./SuggestionContainer.module.css";

const SuggestionContainer = ({ avatar, username, friend }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center mx-2 ${classes.SuggestionContainer}`}
    >
      <img src={avatar} alt="Avatar" className={``} />
      <p
        className={`font-roboto font-medium text-secondary pt-1 ${classes.Username}`}
      >
        {username}
      </p>
      <p
        className={`font-roboto font-medium text-primary pt-3 ${classes.Action}`}
      >
        {" "}
        {friend ? "Connect" : "Join Group"}{" "}
      </p>
    </div>
  );
};

export default SuggestionContainer;
