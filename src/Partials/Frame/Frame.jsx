import React from 'react';
import './Frame.css';

//Components;


export default function Frame({tags, title, desc, author, imgURL, time}) {
    return (
        <div className="frame" >
            <img src= {imgURL} alt=""/>
            <div className="frame-data">
                <div className="tags">
                    {tags?.map((item, index)=><p key={index} > {item} </p>)}
                </div>
                <p className="frame-title"> {title} </p>
                <p className="frame-details"> {desc} </p>
                <div className="auth-details">
                    <img src= {author.imgURL}  alt="err"/>
                    <div className="frame-time">
                        <p className="name">{author.name}</p>
                        <p className="min-read">{time}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
