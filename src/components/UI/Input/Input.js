import React from "react";
import classes from "./Input.module.css";

const Input = ({ label, type }) => {
  return (
    <input
      className={`h-14 w-full bg-white pl-4 py-4 text-form font-normal font-roboto text-base placeholder-form outline-none ${classes.Input}`}
      placeholder={label}
      type={type}
    />
  );
};

export default Input;
