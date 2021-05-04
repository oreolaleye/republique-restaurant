import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import "../styles/Links.css"

function Links(props) {
    library.add(faFacebookF); 
    return (
        <div>
            <div className={props.lower ? "" : "links"} id={props.lower ? "lower" : ""}>
                <ul>
                    <li><a href="https://facebook.com"><FontAwesomeIcon className="socials" icon={['fab', 'facebook-f']} /></a></li>
                    <li><a href="https://twitter.com"><FontAwesomeIcon className="socials" icon={faTwitter} /></a></li>
                    <li><a href="https://instagram.com"><FontAwesomeIcon className="socials" icon={faInstagram} /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Links
