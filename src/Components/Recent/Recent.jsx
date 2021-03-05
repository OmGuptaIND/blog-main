import React from 'react';
import './Recent.css';

//Components;
import Frame from '../../Partials/Frame/Frame';
import Data from './Data';

export default function Recent() {
    return (
        <div className="recent" >
            <div className="rct-title">Recent</div>
            <div className="rct-items">
                {Data?.map(({title, _id, desc, imgURL, time, author, tags})=>{
                    return(
                        <Frame 
                            key = {_id}
                            title = {title}
                            desc = {desc}
                            imgURL = {imgURL}
                            author = {author}
                            time = {time}
                            tags = {tags}
                        />
                    )
                })}
            </div>
        </div>
    )
}
