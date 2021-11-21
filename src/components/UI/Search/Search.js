import React from 'react';

import classes from './Search.module.css';
import SearchImage from '../../../assets/search.svg';

const Search = () => {
    return (
        <div className={`flex items-center pl-4 bg-ash h-8 w-full ${classes.InputContainer}`}>
            <img src={SearchImage} alt="Search"/>
            <input type="type" className={`outline-none font-roboto bg-ash ${classes.Input}`} placeholder="Search"/>
        </div>
    )
}

export default Search