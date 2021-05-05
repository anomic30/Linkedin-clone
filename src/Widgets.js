import React from 'react';
import "./Widgets.css";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoOutlinedIcon />
            </div>
            
            <div className="widgets__article">
                <div className="separate">
                    <div className="widgets__articleLeft">
                        <FiberManualRecordIcon />
                    </div>
                    <div className="widgets__articleRight">
                        <h4>Dogecoin</h4>
                        <p>Finally reaches $1</p>
                    </div>
                </div>
                <br/>
                <div className="separate">
                    <div className="widgets__articleLeft">
                        <FiberManualRecordIcon />
                    </div>
                    <div className="widgets__articleRight">
                        <h4>Tesla</h4>
                        <p>Launches internet in India</p>
                    </div>
                </div>
                <br />
                <div className="separate">
                    <div className="widgets__articleLeft">
                        <FiberManualRecordIcon />
                        
                    </div>
                    <div className="widgets__articleRight">
                        <h4>SpaceX SN15</h4>
                        <p>Launching soon!</p>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    );

}

export default Widgets
