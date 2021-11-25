import React from "react";

import classes from "./MessageContainer.module.css";

const MessageContainer = ({ userImage, username, message, unread, date }) => {
  return (
    <div className={`flex items-center py-2`}>
      <img src={userImage} alt="User" className={`mr-3`} />
      <div
        className={`flex justify-between w-full pb-3 ${classes.MessageDetailsContaner}`}
      >
        <div className={`flex flex-col `}>
          <p
            className={`font-roboto font-medium text-secondary ${classes.Username}`}
          >
            {username}
          </p>
          <p
            className={`font-medium font-roboto text-secondary ${classes.Message}`}
          >
            {message}
          </p>
        </div>
        <div className={`flex flex-col items-center justify-between`}>
          <div
            className={`flex justify-center items-center bg-primary ${
              unread ? classes.Unread : classes.Read
            }`}
          >
            <p className={`font-roboto font-medium text-white`}>{unread}</p>
          </div>
          <p
            className={`text-secondary font-roboto font-medium ${classes.Date}`}
          >
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
