import React from "react";

import classes from "./SinglePost.module.css";

import PostedImage from "../../assets/PostedImage1.png";
import Like from '../../assets/like.svg';
import Love from '../../assets/love.svg';
import Share from '../../assets/share.svg';
import Comment from '../../assets/comment.svg';

const SinglePost = ({username, userImage, followingstatus, date}) => {
  return (
    <div className={`flex flex-col w-full mt-2 pb-2 ${classes.SinglePostContainer}`}>
      <div className={`flex items-center px-6 pb-2`}>
        <img src={userImage} alt="User" className={`mr-4`} />
        <div className={`flex justify-between items-center`}>
          <div className={`flex flex-col mr-1`}>
            <h4 className={`font-roboto font-medium text-secondary text-sm`}>
              {username}
            </h4>
            <p className={`font-roboto font-light text-xs text-secondary`}>
              Chilling from the heart of Jos, It only gets better from ther...{" "}
              <span className={`font-medium`}>See more</span>
            </p>
          </div>
          <div className={`flex justify-betwen`}>
            <div className={`flex flex-col justify-between mr-3`}>
              <button
                className={`bg-primary text-white font-roboto font-medium ${classes.FollowButton}`}
              >
                {followingstatus}
              </button>
              <p className={`font-roboto mt-2 ${classes.Date}`}>{date}</p>
            </div>
            <div className={`flex flex-col items-center`}>
              <div className={`${classes.SmallDot}`}></div>
              <div className={`${classes.SmallDot}`}></div>
              <div className={`${classes.SmallDot}`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full`}>
        <img src={PostedImage} alt="Post" className={`max-w-full`} />
      </div>
      <div className={`px-2 pt-2`}>
          <div className={`px-2 flex justify-between items-center pb-2 ${classes.ReactionContainer}`}>
              <div className={`flex items-center`}>
                <p className={`font-roboto text-secondary mr-3 font-normal ${classes.Reaction}`}>230 Reactions</p>
                <img src={Like} alt="Like" className={`mr-2`}/>
                <img src={Love} alt="Love"/>
              </div>
              <div className={`flex items-center`}>
                  <div className={`flex items-center mr-3`}>
                      <p className={`font-roboto font-normal text-secondary mr-1 ${classes.Reaction}`}>20 Share</p>
                      <img src={Share} alt="Share"/>
                  </div>
                  <div className={`flex items-center`}>
                      <p className={`font-roboto font-normal text-secondary mr-2 ${classes.Reaction}`}>79 comments</p>
                      <img src={Comment} alt="Comments"/>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default SinglePost;
