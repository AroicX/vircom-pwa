import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SinglePost from "../../components/SinglePost/SinglePost";

// Images
import UserImage1 from "../../assets/PostUserImage.png";
import UserImage2 from "../../assets/PostUserImage2.png";
import PostedImage from "../../assets/PostedImage1.png";

const Home = ({ setIsMenu }) => {
  return (
    <div style={{ marginBottom: "3.31em" }}>
      <Header setIsMenu={setIsMenu} />
      <div style={{borderTop: "5px solid #E2E2E2"}}>
        <SinglePost
          userImage={UserImage1}
          username="Elijah Gabriel"
          date="23, Nov"
          followingstatus="Follow"
          postedImage={PostedImage}
        />
        <SinglePost
          userImage={UserImage2}
          username="Peace John"
          date="23, Oct"
          followingstatus="Following"
          postedImage={PostedImage}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
