import React from "react";

import classes from "./NotificationContainer.module.css";

// Images
import Love from "../../assets/love.svg";
import Like from "../../assets/like.svg";

const NotificationContainer = ({
  userImage,
  username,
  message,
  online,
  date,
  reaction,
}) => {
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
          {reaction === "like" ? (
            <div className={`flex flex-col`}>
              <p
                className={`font-medium font-roboto text-secondary ${classes.Message}`}
              >
                Reacted to your Post
              </p>
              <img src={Like} alt="Like" className={`${classes.Like}`}/>
            </div>
          ) : (
            ""
          )}
          {reaction === "love" ? (
            <div className={`flex flex-col`}>
              <p
                className={`font-medium font-roboto text-secondary ${classes.Message}`}
              >
                Reacted to your Post
              </p>
              <img src={Love} alt="Love" className={`${classes.Love}`}/>
            </div>
          ) : (
            ""
          )}
          {reaction === "comment" ? (
            <div className={`flex flex-col`}>
              <p
                className={`font-medium font-roboto text-secondary ${classes.Message}`}
              >
                Commented on your Post
              </p>
            </div>
          ) : (
            ""
          )}
          {reaction === "message" ? (
            <div className={`flex flex-col`}>
              <p
                className={`font-medium font-roboto text-secondary ${classes.Message}`}
              >
                Pinged you
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={`flex flex-col items-center justify-between`}>
          <p
            className={`font-roboto font-medium text-secondary ${classes.Date}`}
          >
            {date}
          </p>
          <p
            className={`text-secondary font-roboto font-medium ${classes.Online} ${
              online ? "" : "opacity-0"
            }`}
          >
            {online ? "online" : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationContainer;
