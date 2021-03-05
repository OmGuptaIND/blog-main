import React from 'react';
import './Featured.css';

//Components;
import Card from '../../Partials/Card/Card';
import Data from './Data';

export default function Featured() {
    return (
        <div className="ftr" >
            <div className="ftr-title">Featured</div>
            <div className="ftr-items">
                {Data?.map(({_id, title, author, color}) => {
                    return (
                        <Card 
                            key = {_id}
                            title = {title}
                            author = {author}
                            color = {color}
                        />
                    )
                })}
            </div>
        </div>
    )
}
