import React from "react";

import classes from "./Notification.module.css";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NotificationContainer from "../../components/NotificationContainer/NotificationContainer";

// Images
import PostUserImage2 from "../../assets/PostUserImage2.png";
import PostUserImage3 from "../../assets/PostUserImage3.png";
import PostUserImage4 from "../../assets/PostUserImage4.png";
import PostUserImage5 from "../../assets/PostUserImage5.png";

const Nofitication = ({ setIsMenu }) => {
  return (
    <div style={{ marginBottom: "3.31em" }}>
      <Header setIsMenu={setIsMenu} />
      <div className={`pt-6 ${classes.NotificationsContainer}`}>
        <div
          className={`flex flex-col px-4 ${classes.AllMessageContianer} pb-2`}
        >
          <NotificationContainer
            userImage={PostUserImage5}
            username="A.J Kim"
            reaction="comment"
            date="Just now"
            online
          />
          <NotificationContainer
            userImage={PostUserImage3}
            username="Gabriel Adams"
            reaction="love"
            date="5, mins"
            online
          />
          <NotificationContainer
            userImage={PostUserImage4}
            username="Joy Emmanuel"
            reaction="like"
            date="12, Aug"
          />
          <NotificationContainer
            userImage={PostUserImage2}
            username="Abraham Jane"
            reaction="message"
            date="12, Jun"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Nofitication;
