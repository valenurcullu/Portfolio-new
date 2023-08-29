import React from "react";
import './intro.css'
import bg from '../../assets/image.png'

const Intro = ()=>{
    return(
        <section id="intro">
            <div className="introContent">
                <span className="helo"> Hello,</span>
                <span className="introText">I'm<span className="introName">Valentin</span><br/>Full Stack Developer</span>
                <p className="introPara">I'm </p>
            </div>
            <img src={bg} alt="profile" className="bg"/>
        </section>
    )
}

export default Intro