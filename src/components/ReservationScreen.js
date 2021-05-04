import React, { useState } from 'react'
import Header from './Header'
import "../styles/ReservationScreen.css"
import Links from './Links'
import emailjs from 'emailjs-com';

function ReservationScreen() {
    const [success, setSuccess ] = useState(false);
    const refresh =()=>{
        window.location.reload(false);
    }

    const sendEmail = (e) =>{
        e.preventDefault();
    
        emailjs.sendForm('service_xwc1b7r', 'republique-contact-form', e.target, 'user_xMNVaxGuKerEw6MDZtLRL')
          .then((result) => {
              console.log(result.text);
              setSuccess(true);
          }, (error) => {
              console.log(error.text);
          });
          
          
      }

    
    return (
        <div className="reserve">
            <div className="layer">
            {success ? 
                    <div className="modal">
                        <div className="success-msg">
                            <h2>Reservation Successfully Submitted</h2>
                            <p>Thanks for choosing to dine at <strong>Republique</strong> <br />Your'll receive a confirmation email shortly.</p>
                            <div className="modal-close">
                                <a href="#" onClick={() => {setSuccess(false); refresh() }}>Close</a>
                            </div>
                        </div>
                       
                    </div>
                : null}
                <Header reserve></Header>
                <div className="form-div">
                    <h2>Reserve Table</h2>
                    <h4>Please fill this form to reserve a table at Republique</h4>
                    <form onSubmit={sendEmail}>
                        <fieldset>
                            <div className="input-div">
                                <div className="inner">
                                    <input type="text" name="name" id="name" placeholder="Name" required/>
                                </div>
                                
                            </div>
                            
                            <div className="input-div third">
                                <div className="inner">
                                    <input type="email" name="email" id="email" placeholder="E-mail" required/>
                                </div>
                                
                                <div className="inner">
                                    <input type="tel" name="phone" id="phone" placeholder="Phone No" required/>
                                </div>
                                
                            </div>

                            <div className="input-div third">
                                <div className="inner">
                                    <label for="date">Date</label>
                                    <input type="date" name="date" id="date" required/>
                                    
                                </div>
                                
                                <div className="inner">
                                    <label for="time">Time</label>
                                    <select id="time" name="time" required>
                                        <option>--Select Time--</option>
                                        <option value="10:00am">10:00am</option>
                                        <option value="10:30am">10:30am</option>
                                        <option value="11:00am">11:00am</option>
                                        <option value="11:30am">11:30am</option>
                                        <option value="12noon">12noon</option>
                                        <option value="12:30pm">12:30pm</option>
                                        <option value="1:00pm">1:00pm</option>
                                        <option value="1:30pm">1:30pm</option>
                                    </select>
                                </div>
                                
                                <div className="inner">
                                    <label for="guest">Number</label>
                                    <input type="number" name="guest" id="guest" min="0" max="10" defaultValue="1" required/>
                                </div>
                            </div>

                            <div className="input-div">
                                <div className="inner">
                                    <label for="type">Reservation Type</label>
                                    <select name="type" id="type" required>
                                        <option>--select--</option>
                                        <option value="birthday">Birthday</option>
                                        <option value="corporate">Corporate</option>
                                        <option value="dinner">Dinner</option>
                                        <option value="private">Private</option>
                                        <option value="vip">VIP</option>
                                        <option value="wedding">Wedding</option>
                                    </select>
                                </div>
                            </div>

                            <div className="btn-div">
                                <input type="submit" value="Book Reservation" id="btn" />
                            </div>
                        </fieldset>
                    </form>
                </div>
                <Links lower/>
            </div>
        </div>
    )
}

export default ReservationScreen
