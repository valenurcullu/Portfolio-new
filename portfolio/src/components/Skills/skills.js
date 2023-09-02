import React from "react";
import './skills.css';
import frontend from '../../assets/frontend.jpg';
import backend from '../../assets/backend.jpg';
import database from '../../assets/database.jpg';
import {FaReact,FaNode,FaGitAlt,FaGithub} from 'react-icons/fa';
import {SiRedux,SiPostgresql,SiTypescript,SiJavascript,SiNextdotjs,SiHtml5,SiCss3,SiExpress,SiNestjs,SiSequelize} from 'react-icons/si'
//import FrontEnd from './frontEnd.js';
//import BackEnd from './backEnd.js';

const Skills = ()=>{
    return(
        <section id="skills">
            <span className="skillTitle">Skills </span>
            <span className="skillDesc">I'm a skilled and passionate web developer with experience with many technologies</span>
            <div className="skillBars">
                <div className="skillBar">
                <img src={frontend} alt="UIDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2 className="subtitles">FrontEnd</h2>
                         <p><><SiJavascript/></> JavaScript {'--->'}<span className="span">  Intermediate </span></p>
                         <p><><SiTypescript/></> Typescript {'--->'}<span className="span">  Basic </span></p>
                         <p><><FaReact/></> React {'--->'}<span className="span">    Intermediate </span></p>
                         <p><><SiRedux/></> Redux {'--->'}<span className="span">    Intermediate </span></p>
                         <p><><SiNextdotjs/></>Next.js {'--->'}<span className="span">   Basic </span></p>
                         <p><><SiHtml5/></>HTML {'--->'}<span className="span">  Intermediate </span></p>
                         <p><><SiCss3/></>CSS {'--->'}<span className="span">    Basic </span></p>
                    </div>
                 </div>
                <div className="skillBar">
                     <img src={backend} alt="WebDesign" className="skillBarImg"/>
                     <div className="skillBarText">
                         <h2 className="subtitles">BackEnd</h2>
                         <p><><FaNode/></> Node.js {'--->'}<span className="span"> Intermediate</span></p>
                         <p><><SiExpress/></> Express.js {'--->'}<span className="span"> Intermediate</span></p>
                         <p><><SiNestjs/></> Nest.js {'--->'}<span className="span"> Basic</span></p>
                         <p><><SiSequelize/></> Sequelize {'--->'}<span className="span"> Intermediate</span></p>
                         
                    </div>  
                </div>
                <div className="skillBar">
                      <img src={database} alt="AppDesign" className="skillBarImg"/>
                      <div className="skillBarText">
                        <h2 className="subtitles">Data Base & Version Systems</h2>
                        <p><><SiPostgresql/></> PostgreSQL {'--->'}<span className="span"> Intermediate</span></p>
                         <p><><FaGitAlt/></> GIT {'--->'}<span className="span"> Intermediate</span></p>
                         <p><><FaGithub/></> GitHub {'--->'}<span className="span"> Intermediate</span></p>
                     </div>
                 </div>
        </div>
     </section>
    )
}

export default Skills

{/* <section id="skills">
<span className="skillTitle">What I do </span>
<span className="skillDesc">I'm a skilled and passionate web developer with experience in many projects</span>
<div className="skillBars">
    <div className="skillBar">
        <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
        <div className="skillBarText">
            <h2>UI/UX DESIGN</h2>
            <p>I am a constantly growing software engineer and seeking to learn every day.</p>
        </div>
    </div>
    <div className="skillBar">
        <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
        <div className="skillBarText">
            <h2>WEB DESIGN</h2>
            <p>I am a constantly growing software engineer and seeking to learn every day.</p>
        </div>
    </div>
    <div className="skillBar">
        <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
        <div className="skillBarText">
            <h2>APP DESIGN</h2>
            <p>I am a constantly growing software engineer and seeking to learn every day.</p>
        </div>
    </div>
</div>
</section> */}

{/* <section className="skills section" id="skills">
<h2 className="skillTitle">Skills</h2>
<span className="skillDesc" >My technical level</span>
<div className="skills__containerAll container grid">
    <FrontEnd/>

    <BackEnd/>
</div>

</section> */}