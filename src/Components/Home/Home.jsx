import React, {useState} from 'react';
import './Home.css';

//Components;
import Header from '../../Partials/Header/Header';
import Featured from '../Featured/Featured';
import Recent from '../Recent/Recent';
import Flow from '../Flow/Flow';
import Footer from '../../Partials/Footer/Footer';
import Tags from '../Tags/Tags';
import Drawer from '../../Partials/Drawer/Drawer';


export default function Home() {

    const [show, setShow] = useState(false);

    return (
        <div className="home" >
           <div className="header"><Header setShow = {()=>setShow(!show)} /></div>
           <div className="home_data">
               <div className="dots-drawer"><Drawer show = {show} /></div>
               <div className="featured"><Featured /></div>
               <div className="recent"><Recent /></div>
               <div className='card_flow'><Flow /></div>
               <div className="home_tags"><Tags /></div>
           </div>
           <div className="footer"><Footer /></div>
        </div>
    )
}
