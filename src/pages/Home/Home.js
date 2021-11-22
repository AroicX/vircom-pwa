import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SinglePost from "../../components/SinglePost/SinglePost";

// Images
import UserImage1 from "../../assets/PostUserImage.png";
import UserImage2 from "../../assets/PostUserImage2.png";

const Home = () => {
  return (
    <div style={{ marginBottom: "3.31em" }}>
      <Header />
      <SinglePost
        userImage={UserImage1}
        username="Elijah Gabriel"
        date="23, Nov"
        followingstatus="Follow"
      />
      <SinglePost
        userImage={UserImage2}
        username="Peace John"
        date="23, Oct"
        followingstatus="Following"
      />
      <Footer />
    </div>
  );
};

export default Home;
