
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dausrlc', 'template_pr9v4of', form.current, 'XVfPCXRO_bLkHJwBJ')
      
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icons'/>
            <h4>Email</h4>
            <h5>arshdeep.arora256@gmail.com</h5>
            <a href="mailto:arshdeep.arora256@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiFillLinkedin className='contact__option-icons'/>
            <h4>Linkedin</h4>
            <h5>Arsdeep Arora</h5>
            <a href="https://linkedin.com/in/arshdeeparora017" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsTelephone className='contact__option-icons'/>
            <h4>Phone</h4>
            <h5>+16135522233</h5>
            <h4>Call or Message</h4>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact