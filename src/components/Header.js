import React, { useState }from 'react'
import menu from "../img/menu.svg"
import closeIcon from "../img/close.png"
import { Link } from 'react-router-dom'
import "../styles/Header.css"
import Links from './Links'

function Header(props) {
    const [unhide, setUnhide] = useState(false);
    const [close, setClose] = useState(true);

    return (
        <div>
            <header>
                <div className="screen-menu">
                    <ul>
                        <li><a href="/" id={props.home ? "clicked" : ""}>Home</a></li>
                        <li><a href="/menu" id={props.menu ? "clicked" : ""}>Menu</a></li>
                        <li><a href="/reservations" id={props.reserve ? "clicked" : ""}>Reservations</a></li>
                        <li><a href="/contact" id={props.contact ? "clicked" : ""}>Contact</a></li>
                    </ul>
                </div>
                        
                {close ? 
                     // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a href="#" onClick={() => {setUnhide(true); setClose(false)}}><img className="menu-icon" src={menu} alt="" /></a> 
                : null}

                {unhide? 
                    <div className="mobile-menu">
                        {unhide ?
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a className="close-icon" href="#" onClick={() => {setUnhide(false); setClose(true)}}>
                            <img src={closeIcon} alt=""/></a> 
                            
                        : null}
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/reservations">Reservations</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                : null}
            </header> 
        </div>
    )
}

export default Header
