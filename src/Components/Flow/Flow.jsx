import React from 'react';
import './Flow.css';

//Components;
import Flcard from '../../Partials/FlCards/Flcard';
import Data from './Data';

export default function Flow() {
    return (
        <div className="flow-wrapper">
            <div className="flow" >
                <p className="fl-title">Other Posts</p>
                <div className="fl-cards">
                    {Data?.map(({_id, title, imgURL, desc, author, tags})=>(
                            <p key={_id} >
                                <Flcard
                                    title={title}
                                    key = {_id}
                                    imgURL = {imgURL}
                                    desc = {desc}
                                    author = {author}
                                    tags = {tags}
                                />
                            </p>
                        )
                    )}
                </div>
            </div>
            <p className="more-btn">Show More</p>
        </div>
        
    )
}
