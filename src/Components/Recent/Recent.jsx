import React from 'react';
import './Recent.css';

//Components;
import Frame from '../../Partials/Frame/Frame';


export default function Recent() {
    return (
        <div className="recent" >
            <div className="rct-title">Recent</div>
            <div className="rct-items">
                <Frame />
            </div>
        </div>
    )
}
