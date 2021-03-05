import React from 'react';
import './Drawer.css';

//Components;


export default function Drawer({show}) {
    console.log(show);
    const styles = {
        dR:{
            display: show ? "inline":"none",
        }
    }
    console.log(styles.dR);
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
