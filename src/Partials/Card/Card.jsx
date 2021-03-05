import React from 'react';
import './Card.css';

//Components;


export default function Card({title, author, color}) {
    const main_styles = {
        backgroundColor:color,
        boxShadow:"0px 0px 8px rgba(255, 255, 255, 0.8)"
    }
    return (
            <div className="card" style={main_styles} >
                <div className="img">
                    <img src="images/one.jpeg" alt="err" />
                </div>
                <div className="card_data">
                    <div className="card_title">{title}</div>
                    <div className="author">{author}</div>
                </div>
            </div>
    )
}
