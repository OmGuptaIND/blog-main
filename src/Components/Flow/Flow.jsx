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
                            <Flcard
                                key = {_id}
                                title={title}
                                imgURL = {imgURL}
                                desc = {desc}
                                author = {author}
                                tags = {tags}
                            />
                        )
                    )}
                </div>
            </div>
            <p className="more-btn">Show More</p>
        </div>
        
    )
}
