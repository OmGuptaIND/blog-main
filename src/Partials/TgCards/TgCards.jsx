import React from 'react';
import './TgCards.css';

//Components;


export default function TgCards({title, imgURL, _id, color}) {
    console.log(color);

    const styles = {
        tCards:{
            backgroundColor:color
        }
    }

    return (
        <div className="t-cards" style={styles.tCards} >
            <img src= {imgURL} alt="err"/>
            <p className="t-title">{title}</p>
        </div>
    )
}
