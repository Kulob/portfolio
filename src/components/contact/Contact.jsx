import React from 'react'
import './Contact.scss'
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7efwna6', 'template_6x43fp4', form.current, 'kl9JojKSMnncYILiq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>xsafarmad2001@gmail.com</h5>
            <a href="mailto:xsafarmad2001@gmail.com" target="_blank"> Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineMessage className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Mirovonzoda</h5>
            <a href="mailto:xsafarmad2001@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@Kulob55</h5>
            {/* <a href="https://api.whatsapp.com/send?phone+79881425281" target="_blank">Send a message</a> */}
            <a href="https://web.telegram.org/" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
