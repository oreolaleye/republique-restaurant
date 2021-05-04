import React from 'react'
import Header from './Header'
import Links from './Links'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import "../styles/ContactScreen.css"

function ContactScreen() {
    library.add(faFacebookF); 
    return (
        <div className="contact">
            <div className="layer">
                <Header contact/>
                <section className="contact-section">
                    <div className="contact-info">
                        <h1>Dine at Republique</h1>
                        <p>65, Daimaru Tape Drive, Some Fancy City, In a Nice Country, Somewhere on Earth.</p>
                        <p><a >+1234-567-8901, contact@republique.com</a></p>
                        <br />
                        <p>Weekdays: 12noon - 9pm, Weekends: 10am - 11pm</p>
                        <ul className="social-links">
                            <li><a href="https://facebook.com"><FontAwesomeIcon className="socials" icon={['fab', 'facebook-f']} /></a></li>
                            <li><a href="https://twitter.com"><FontAwesomeIcon className="socials" icon={faTwitter} /></a></li>
                            <li><a href="https://instagram.com"><FontAwesomeIcon className="socials" icon={faInstagram} /></a></li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ContactScreen
