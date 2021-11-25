import React from "react";
import { useNavigate } from "react-router-dom";

// Images
import VIRCOM from "../../assets/vircom.png";
import Google from "../../assets/google.svg";
import Facebook from "../../assets/facebook.svg";

// Component
import Input from "../../components/UI/Input/Input";
import BigButton from "../../components/UI/Buttons/BigButton/BigButton";
import SocialButton from "../../components/UI/Buttons/SocialButton/SocialButton";

const SignUp = () => {
  const navigate = useNavigate();

  const next = () => {
    navigate("/signin");
  };
  return (
    <div className='flex flex-col px-6 justify-center'>
      <div className='flex items-center justify-center mt-20 mb-8'>
        <img src={VIRCOM} alt='Title' />
      </div>
      <div>
        <h2 className='font-roboto font-medium text-2xl text-header'>
          Create your account
        </h2>
        <div className='py-2'>
          <Input label='Email' type='email' />
        </div>
        <div className='py-2'>
          <Input label='Phone Number' type='text' />
        </div>
        <div className='py-2'>
          <Input label='User Name' type='text' />
        </div>
        <div className='py-2'>
          <Input label='Password' type='password' />
        </div>
        <div className='py-2'>
          <Input label='Confirm Password' type='password' />
        </div>
        <div className='py-4'>
          <BigButton value='Sign Up' component='a' to='home' />
        </div>
        <p className='font-roboto text-sm text-center text-form font-medium py-4'>
          {" "}
          or sign up with
        </p>
      </div>
      <div className='flex items-center'>
        <div className='mr-4 w-full'>
          <SocialButton value={Google} />
        </div>
        <div className='w-full'>
          <SocialButton value={Facebook} />
        </div>
      </div>

      <p className='text-center font-medium font-roboto text-sm text-form my-14'>
        Already have an account?{" "}
        <span className='text-primary cursor-pointer' onClick={next}>
          Sign in
        </span>
      </p>
    </div>
  );
};

export default SignUp;
