import React from "react";

import Logo from "../../assets/logo.png";
import VIRCOM from "../../assets/vircom.png";

const Splash = () => {
  return (
    <a href="/signin" className="flex justify-center items-center flex-col h-screen">
      <img src={Logo} alt="Logo" />
      <img src={VIRCOM} alt="Vircom" className="pt-7"/>
    </a>
  );
};

export default Splash;
