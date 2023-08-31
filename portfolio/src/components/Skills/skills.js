import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = ()=>{
    return(
        <section id="skills">
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
        </section>
    )
}

export default Skills