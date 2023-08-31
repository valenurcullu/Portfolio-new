import React from "react";
import './contact.css';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';


const Contact = () => {
    return(
        <section className="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
            <form className="contactForm">
                <div className="links">
                    <img src={linkedin} alt="linkedin" className="link"/>
                    <img src={github} alt="github" className="link"/>
                </div>
                <input type="text" className="name" placeholder="Your Name"/>
                <input type="email" className="email" placeholder="Your Email"/>
                <textarea className="msg" name="message" rows='5' placeholder="Your Message"></textarea>
                <button type="submit" value='send' className="submitBtn">Submit</button>
            </form>
        </div>
        </section>
    )
}

export default Contact