import React from 'react';

import classes from './SocialButton.module.css';

const SocialButton = ({value}) => {
    return (<button className={`bg-white h-14 w-full flex justify-center items-center ${classes.SocialButton}`}>
        <img src={value} alt="Social"/>
    </button>)
}

export default SocialButton;