import React, { useState } from 'react'
import './Contact.css'
  
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]);
  
    const isValidEmail = email => {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(String(email).toLowerCase());
    };
  
  const handleSubmit = () => {
    let errorsArr = [];
    if (!name) errorsArr.push('* Name is required!');
    if (!email) errorsArr.push('* Email is required!');
    if(email && !isValidEmail(email)) errorsArr.push('* Email is invalid!');
    if (!message) errorsArr.push('* Message is required!');

    setErrors(errorsArr);
  }

    return (
    <div>
      {/* <!-- CONTACT --> */}
        <section className="contact section" id="contact">
            <h2 className="section-title">Contact</h2>

            <div className="contact_container bd-grid">
                <form action="" className="contact_form">
                    <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="contact_input"/>
                    <input type="mail" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="contact_input"/>
                    <textarea name="" id="" cols="0" rows="10" value={message} onChange={e => setMessage(e.target.value)} className="contact_input"></textarea>
                    <input type="button" value="Enter" onClick={handleSubmit} className="contact_button button"/>
                    <div className={errors.length > 0 ? 'visible' : ''}>
                      <ul>
                        {errors.map((err, index) => (<li key={index}>{err}</li> ))}
                      </ul>
                    </div>
              </form>
            </div>
        </section>
    </div>
  )
}

export default Contact