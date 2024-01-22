import React from 'react'
import ME from '../../assets/Me-Square.jpeg'
import ContactSocials from './ContactSocials'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__me">
            <div className="contact__me-image">
              <img src={ME} alt="" />
            </div>
            <ContactSocials />
          </div>
          <div className="contact__content">
            <h2>Get in touch</h2>
            <form action="">
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