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
                {Data?.map(item => {
                    return (
                        <>
                            <Card 
                                key = {item._id}
                                id = {item._id}
                                title = {item.title}
                                author = {item.author}
                                color = {item.color}
                            />
                        </>
                    )
                })}
            </div>
        </div>
    )
}
