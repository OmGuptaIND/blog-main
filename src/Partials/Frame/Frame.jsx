import React from 'react';
import './Frame.css';


export default function Frame() {
    return (
        <div className="frame" >
            <img src="images/insta.jpeg" alt=""/>
            <div className="frame-data">
                <div className="tags"><p>Creativity</p><p>Creativity</p></div>
                <p className="frame-title">I work Best when my space is filled with Inspiration</p>
                <p className="frame-details">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem minima, nisi tempora ab sapiente quidem nemo qui impedit. Recusandae reiciendis amet quibusdam maxime provident saepe. Alias vel excepturi at aperiam.</p>
                <div className="auth-details">
                    <img src="images/avatar.jpeg" alt="err"/>
                    
                    <div className="frame-time">
                        <p className="name">Om Gupta</p>
                        <p className="min-read"  >3 Min Read</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
