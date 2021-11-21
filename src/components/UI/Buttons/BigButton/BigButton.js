import React from "react";
import classes from "./BigButton.module.css";

const BigButton = ({ value }) => {
  return (
    <button
      className={`w-full h-14 bg-primary text-white font-roboto font-bold text-2xl ${classes.BigButton}`}
    >
      {value}
    </button>
  );
};

export default BigButton;
