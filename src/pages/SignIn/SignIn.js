import React from "react";
import { useNavigate } from "react-router-dom";
import VIRCOM from "../../assets/vircom.png";

// Components Import
import Input from "../../components/UI/Input/Input";
import BigButton from "../../components/UI/Buttons/BigButton/BigButton";
import SocialButton from "../../components/UI/Buttons/SocialButton/SocialButton";

// Images Import
import Google from "../../assets/google.svg";
import Facebook from "../../assets/facebook.svg";

const SignIn = () => {
  const navigate = useNavigate();
  const next = () => {
    navigate("/signup");
  };
  return (
    <div className="flex flex-col justify-center px-6">
      <div className="flex items-center justify-center mt-32 mb-24">
        <img src={VIRCOM} alt="Title" />
      </div>
      <div>
        <h2 className="font-roboto font-medium text-2xl text-header">
          Login to your account
        </h2>
        <div className="py-4">
          <Input label="Email" type="email" />
        </div>
        <div className="py-4">
          <Input label="Password" type="password" />
        </div>
        <div className="py-4">
          <BigButton value="Sign In" />
        </div>
        <p className="font-roboto text-sm text-center text-form font-medium py-4">
          {" "}
          or sign in with
        </p>
        <div className="flex items-center">
          <div className="mr-4 w-full">
            <SocialButton value={Google} />
          </div>
          <div className="w-full">
            <SocialButton value={Facebook} />
          </div>
        </div>
      </div>

      <p className="text-center font-medium font-roboto text-sm text-form my-14">
        Don’t have an account?{" "}
        <span className="text-primary cursor-pointer" onClick={next}>
          Sign up
        </span>
      </p>
    </div>
  );
};

export default SignIn;
