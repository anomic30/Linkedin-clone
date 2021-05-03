import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import MovieSharpIcon from '@material-ui/icons/MovieSharp';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ViewDaySharpIcon from '@material-ui/icons/ViewDaySharp';
import './Feed.css';
import InputOption from './InputOption';

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={MovieSharpIcon} title="Video" color="#7FC15E" />
                    <InputOption Icon={EventAvailableIcon} title="Event" color="orange" />
                    <InputOption Icon={ViewDaySharpIcon} title="Write article" color="lightcoral"/>
                </div>
            </div>
        </div>
    )
}

export default Feed
