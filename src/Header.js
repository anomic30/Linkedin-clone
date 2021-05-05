import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption.js';
import { useDispatch} from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/counter/userSlice';

function Header() {
    const dispatch = useDispatch();
    const logOutApp = () => {
        dispatch(logout())
        auth.signOut();
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://img.icons8.com/fluent/96/000000/linkedin.png" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon}title="Home" />
                <HeaderOption Icon={PeopleAltIcon} title="My Network" />
                <HeaderOption Icon={WorkIcon} title="Jobs" />
                <HeaderOption Icon={MessageIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={true} title="me"
                    onClick={logOutApp}/>
            </div>
        </div>
    );
}

export default Header

//https://img.icons8.com/color/96/4a90e2/linkedin-circled--v4.png
//https://img.icons8.com/fluent/96/000000/linkedin.png