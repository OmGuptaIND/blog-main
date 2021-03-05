import React from 'react';
import './Flcards.css';

//Components;


export default function Flcard({title, imgURL, desc, author, tags}) {
    return (
        <div className='flc' >
            <img src={imgURL} alt="err" />
            <div className="fl-data">
                <p className="fc-title">{title}</p>
                <p className="fc-details">{desc}</p>
                <div className="fc-author">
                    <img src={author?.profile} alt=""/>
                    <p>{author?.name}</p>
                </div>
                <div className="fc-tags">
                    {tags?.map(item => <p>{item}</p>)}
                </div>
            </div>
        </div>
    )
}
