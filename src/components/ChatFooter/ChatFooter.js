import React from "react";

import classes from "./ChatFooter.module.css";

// Images
import VoiceRecorder from "../../assets/voice-recorder.svg";
import Emoji from "../../assets/emoji.svg";

const ChatFooter = () => {
  return (
    <div className={`px-4 my-4 w-full fixed bottom-0 flex items-center`}>
      <div
        className={`w-full flex items-center p-1 mr-2 ${classes.ChatAreaContainer}`}
      >
        <div
          className={`flex justify-center items-center px-2 ${classes.EmojiContainer}`}
        >
          <img src={Emoji} alt="Emoji" />
        </div>
        <input
          type="text"
          placeholder="Type something here"
          className={`w-full pl-3 outline-none bg-white font-roboto ${classes.InputArea}`}
        />
      </div>
      <div
        className={`flex items-center justify-center bg-white ${classes.VoiceRecorderContainer}`}
      >
        <img src={VoiceRecorder} alt="Voice Recorder" />
      </div>
    </div>
  );
};

export default ChatFooter;
