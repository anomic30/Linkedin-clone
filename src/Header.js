import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import HeaderOption from './HeaderOption.js';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1620030896~hmac=2721f253e8df47e240340987f2e491f7" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon}title="Home" />
                <HeaderOption Icon={PeopleAltIcon}title="My Network"/>
            </div>
        </div>
    );
}

export default Header
