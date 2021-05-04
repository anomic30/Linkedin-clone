import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://www.geeklawblog.com/wp-content/uploads/sites/528/2018/12/liprofile-656x369.png" alt="" />
                <Avatar className="sidebar__avatar" src="https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg"/>
                <h2>Anom Chakravorty</h2>
                <h4>anom3008@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">1000</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">1448</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('Never')}
                {recentItem('Give')}
                {recentItem('UP')}
                {recentItem('Keep')}
                {recentItem('Learning')}
            </div>
        </div>
    )
}

export default Sidebar
