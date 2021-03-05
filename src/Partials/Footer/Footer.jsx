import React from 'react';
import './Footer.css';

//Components;
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import RedditIcon from '@material-ui/icons/Reddit';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import Data from './Data';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_top">
                <p>Subscribe for new Posts</p>
                <div className="foot_get">
                    <input className="email" type='email' placeholder="Enter Email" />
                    <p>Subscribe</p>
                </div>
            </div>
            <div className="section"></div>
            <div className="foot">
                <div className="cmp">
                    <p className="cmp_name">BLife</p>
                    <p className="tagline">Veniam minus enim nisi nulla! Numquam nihil ab iusto sit in labore porro blanditiis magni</p>
                    <div className="social">
                        <p><InstagramIcon className='sc' /></p>
                        <p><TwitterIcon className='sc' /></p>
                        <p><RedditIcon className='sc' /></p>
                        <p><FacebookIcon className='sc' /></p>
                        <p><GitHubIcon className='sc' /></p>
                    </div>
                </div>
                <div className="foot_table">
                    {Data?.map(({_id, title, links})=>{
                        return (
                            <div key = {_id} className="foot_list">
                                <p className="foot_tag">{title}</p>
                                {links?.map((item, index)=>(<p key={index} className="foot_options">{item}</p>))}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
