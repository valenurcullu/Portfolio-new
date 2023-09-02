import React, { useRef } from "react";
import './contact.css';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vdjyvt2', 'template_bsdm0dp', form.current, 'sfzdC3CRjzhP1xxAH')
          .then((result) => {
              console.log(result.text);
              e.target.reset()
              alert('Email Sent!')
          }, (error) => {
              console.log(error.text);
          });
      };
    

    return(
        <section className="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <div className="links">
                  <a href="https://www.linkedin.com/in/valentinurcullu/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" className="link"/></a>
                  <a href="https://github.com/valenurcullu" target="_blank" rel="noreferrer"> <img src={github} alt="github" className="link"/></a>
                </div>
                <input type="text" className="name" placeholder="Your Name" name="name"/>
                <input type="email" className="email" placeholder="Your Email" name="email"/>
                <textarea className="msg" name="message" rows='5' placeholder="Your Message"></textarea>
                <button type="submit" value='send' className="submitBtn">Submit</button>
            </form>
            
        </div>
        </section>
    )
}

export default Contact