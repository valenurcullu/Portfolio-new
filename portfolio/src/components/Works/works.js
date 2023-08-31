import React from "react";
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'


const Works = ()=>{
    return(
        <selection id='works'>
            <h2 className="WorksTitle">My Portfolio</h2>
            <span className="worksDesc">these are some of my examples of my projects</span>
            <div className="worksImgs">
                <img src={Portfolio1} alt="" className="worksImg"></img>
                <img src={Portfolio2} alt="" className="worksImg"></img>
                <img src={Portfolio3} alt="" className="worksImg"></img>
                <img src={Portfolio4} alt="" className="worksImg"></img>
                <img src={Portfolio5} alt="" className="worksImg"></img>
                <img src={Portfolio6} alt="" className="worksImg"></img>
            </div>
            
        </selection>
    )
}

export default Works