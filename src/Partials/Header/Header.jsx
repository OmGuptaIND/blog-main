import React from 'react'
import './Header.css';

//Components;
import SearchIcon from '@material-ui/icons/Search';
import {Link, Redirect} from 'react-router-dom';

export default function Header({setShow}) {
    return (
        <div className="header" >
            <div className="options">
                <div className="option">Home</div>
                <div className="option">Featured</div>
                <div className="option">Story</div>
                <div className="option mr" onClick={setShow} >...</div>
            </div>
            <div className="logo">
                <p className="logo_name">BLife</p>
            </div>
            <div className="extra">
                <div className="search_pane"><SearchIcon className="find" /></div>
                <Link className="link" to="/login" ><p className="login" >Sign In</p></Link>
            </div>
        </div>
    )
}
