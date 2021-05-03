import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption.js';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon}title="Home" />
                <HeaderOption Icon={PeopleAltIcon} title="My Network" />
                <HeaderOption Icon={WorkIcon} title="Jobs" />
                <HeaderOption Icon={MessageIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://lh3.googleusercontent.com/proxy/gejixP95x5K9MR6RIIkYXCV5EFUaIp_l555BI8CXQwyrbTCZkd-oC5I-8WITgbEGXVI6uY8NA8LYfkq2gG4aXkm3pc-l_DSbu25gsKxOgbs" title="me"/>
            </div>
        </div>
    );
}

export default Header
