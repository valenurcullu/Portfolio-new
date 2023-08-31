import React from "react";
import './intro.css'
import bg from '../../assets/image.png'
import { Link } from "react-scroll";
import btnImg from '../../assets/hireme.png'

const Intro = ()=>{
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello"> Hello,</span>
                <span className="introText">I'm <span className="introName">Valentin</span><br/>Full Stack Developer</span>
                <p className="introPara">I am a constantly growing software engineer and seeking to learn every day, looking for a Full time job!</p>
                <Link><button className="btn"><img src={btnImg} className='btnImg' alt="Hire"/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg"/>
        </section>
    )
}

export default Intro