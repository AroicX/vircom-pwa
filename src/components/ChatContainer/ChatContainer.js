import React from "react";

import classes from "./ChatContainer.module.css";

const ChatContainer = ({ message, time, sent }) => {
  return (
    <div
      className={` pl-4 py-2 pr-2 flex flex-col my-4 relative box-border ${sent ? classes.Sent : classes.Recieved} ${classes.ChatContainer}`}
    >
      <p
        className={`font-medium font-roboto text-xs text-secondary ${classes.Message}`}
      >
        {message}
      </p>
      <p className={`ml-auto font-roboto font-medium bottom-0 right-2 absolute ${classes.Date}`}>{time}</p>
    </div>
  );
};

export default ChatContainer;
