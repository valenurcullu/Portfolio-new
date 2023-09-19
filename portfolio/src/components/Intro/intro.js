import React from "react";
import './intro.css';
import { Link } from "react-scroll";
import './cube.scss'
import btnImg from '../../assets/hireme.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faJs,
    faCss3,
    faGitAlt,
    faHtml5,
    faNode,
    faReact,
  } from '@fortawesome/free-brands-svg-icons';

const Intro = ()=>{
  
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello"> Hello,</span>
                <span className="introText">I'm <span className="introName">Valentin</span><br/>Full Stack Developer</span>
                <p className="introPara">I am a constantly growing software engineer and seeking to learn every day, looking for a Full time job!</p>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}><button className="btn"><img src={btnImg} className='btnImg' alt="Hire"/>Hire Me</button></Link>
            </div>
            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#DD0031" />
            </div> 
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJs} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
            
        </section>
    )
}

export default Intro


