import React from "react";
import Logo from "../../assets/logo.png";
import VIRCOM from "../../assets/vircom.png";

const DesktopScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="flex justify-center items-center flex-col ">
        <img src={Logo} alt="Logo" />
        <img src={VIRCOM} alt="Name" className="pt-4"/>
      </div>
      <h2 className="my-4 font-medium text-2xl text-center">
        Please You cannot use VIRCOM on a desktop, please use a Mobile phone or
        Tablet
      </h2>
    </div>
  );
};

export default DesktopScreen;
