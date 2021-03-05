import React from 'react';
import './Drawer.css';

//Components;


export default function Drawer({show}) {
    const styles = {
        dR:{
            display: show ? "inline":"none",
        }
    }
    return (
        <div className = "dr-wrapper" style = {styles.dR}  >
            <div className="dr" >
                <p>About</p>
                <p>Categories</p>
                <p>Subscribe</p>
                <p>Contact</p>
            </div>
        </div>
    )
}
