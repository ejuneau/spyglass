import youWont from '../../Assets/Images/You won\'t.webp';
import believe from '../../Assets/Images/believe.webp';
import yourEyes from '../../Assets/Images/your eyes.webp';
import React from 'react';
import {Link, useSearchParams} from "react-router-dom";
import './HomePage.css';
import './HomePageDesktop.css';

import model from '../../Assets/Images/Model.png';
import {motion} from 'framer-motion';


import "../../Assets/Fonts/Mustasurma.ttf";
import "../../Assets/Fonts/Portia.otf";
import "../../Assets/Fonts/A Box For.ttf";




export default function HomePage(props) {

  const [searchParams, setSearchParams] = useSearchParams();

// const absolute = {
//   hidden: {
//     x: "80vw",

//   },
//   show: {
//     x: 0,

//     transition: {
     
//     }
//   }
// }

    return (
          <div className="HomePage">
            <main className="HomePage-main">
              <div className="HomePage-main-right">
                <div className="YWBYEContainer">
                  <img className="YWBYE" id="youWont"   src={youWont} alt="text that reads: you won't"/>
                  <img className="YWBYE" id="believe"   src={believe} alt="text that reads: believe" />
                  <img className="YWBYE" id="yourEyes"  src={yourEyes} alt="text that reads: your eyes" />
                </div>
              </div>
              <div className="HomePage-main-left">
                <div className='Model'><img src={model} alt="a sylised photo female model wearing sunglasses"/></div>

              </div>
              <motion.div className="HomePage-main-center" >
                <div className="HomePage-main-buttons" key="main-hero-buttons">
                  <Link to="/Shop" className="button" id="shopMen" onClick={() => { props.sort==="men"?console.log('men'):props.handleSortChange("men")}}>Men's</Link>
                  <Link to="/Shop" className="button" id="shopWomen" onClick={() => {props.sort==="women"?console.log('women'):props.handleSortChange("women")}}>Women's</Link>
                  <Link to="/Shop" className="button" id="shopEnby" onClick={() => {props.sort==="women"?console.log('enby'):props.handleSortChange("enby")}}>Neutral's</Link>
                </div>
              </motion.div>
              <div className="HomePage-main-accent"></div>
            
            </main>
            <div className="HomePage-Background"></div>
          </div>
    )
}

