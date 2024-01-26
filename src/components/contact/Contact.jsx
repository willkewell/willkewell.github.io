import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ME from '../../assets/Me-Square.jpeg'
import Socials from '../socials/Socials'
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a9fjq1m', 'template_ruy4qea', form.current, 'WGSg56l1FWzLZ_sVw')
    
    e.target.reset()

    alert("Sent successfully, thank you for your message.");
  };

  return (
    <section id='contact'>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__me">
            <div className="contact__me-image">
              <img src={ME} alt="" />
            </div>
            <Socials className='contact__socials'/>
          </div>
          <div className="contact__content">
            <h2>Get in touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder='Your Full Name' required />
              <input type="email" name="email" placeholder='Your Email' required />
              <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
          </div>
        </div>
    </section>
  )
}

export default Contact