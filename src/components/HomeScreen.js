import React from 'react'
import "../styles/HomeScreen.css"
import logo from "../img/Republique3.png"
import Header from './Header'
import Links from './Links'


function HomeScreen() {
    return (
        <div className="home">
            <header>
                <div className="home-div">
                   <Header home></Header>
                    <Links />
                    <div className="text-div">
                        <img className="logo" src={logo} alt="" />
                        <a className="btn" href="/reservations">Book a Reservation</a>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HomeScreen
