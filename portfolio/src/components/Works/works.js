import React from "react";
import './works.css';
import Rick from '../../assets/capturaRick.png'
import Dogs from '../../assets/capturaDogs.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'


const Works = ()=>{
    return(
        <selection id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">these are some of my examples of my projects</span>
            <div className="worksImgs">
                <a href="https://rick-and-morty-psi-eight.vercel.app/" target="_blank" rel="noreferrer">
                <img src={Rick} alt="" className="worksImg"></img>
                </a>
                <a href="https://dogs-one-ochre.vercel.app/" target="_blank" rel="noreferrer">
                <img src={Dogs} alt="" className="worksImg"></img>
                </a>
                <h2 className="worksSubTitle">More projects will be uploded soon...</h2>
                {/* <img src={Portfolio3} alt="" className="worksImg"></img>
                <img src={Portfolio4} alt="" className="worksImg"></img> */}
            </div>
            
        </selection>
    )
}

export default Works