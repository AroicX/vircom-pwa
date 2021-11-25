import React from "react";
import classes from "./BigButton.module.css";

const BigButton = ({ value, component, to }) => {
  return (
    <>
      {component === "a" ? (
        <a
          href={to}
          className={`flex w-full bg-green center bg-primary p-3 rounded text-white uppercase text-center justify-center items-center `}>
          {value}
        </a>
      ) : (
        ""
      )}
      {component === "button" ? (
        <button
          className={`w-full h-14 bg-primary text-white font-roboto font-bold text-2xl ${classes.BigButton}`}>
          {value}
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default BigButton;
