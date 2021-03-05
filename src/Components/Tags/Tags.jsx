import React from 'react';
import './Tags.css';

//Components;
import TgCards from '../../Partials/TgCards/TgCards';
import Data from './Data';

export default function Tags() {
    return (
        <div className="tg" >
            <p className="tg-head">Categories</p>
            <div className="tg-cards">
                {Data?.map(({imgURL, _id, title, color}) => (
                    <TgCards 
                        key = {_id}
                        imgURL = {imgURL}
                        _id = {_id}
                        title = {title}
                        color = {color}
                    />
                ))}
            </div>
        </div>
    )
}
