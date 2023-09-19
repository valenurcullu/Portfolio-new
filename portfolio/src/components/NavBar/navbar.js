import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/ValentinLogo1.png';
import {Link} from 'react-scroll';
import ContactImg from '../../assets/contact.png';
import  menu from '../../assets/menu.png';


const Navbar = ()=>{
    
    const [showMenu,setShowMenu] = useState(false)

    function scrollToContact(){
        document.getElementById('contact').scrollIntoView({behavior:'smooth'})
    }


    return(
            <nav className="navbar">
                <img src={logo} alt="" className="logo"/>
                <div className="desktopMenu">
                    <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
                    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Skills</Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Contact</Link>
                    <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
                </div>
                <button className="desktopMenuBtn" onClick={scrollToContact}>
                <img src={ContactImg} alt="" className="desktopMenuImg"/> Contact Me</button>

                <img src={menu} alt="" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
                <div className="navMenu" style={{display: showMenu?  "flex":"none"}}>
                    <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                    <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>
                    <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                </div>
            </nav>
    )
}

export default Navbar