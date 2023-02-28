import './App.css';
import logo from './Assets/Images/Logo (2 color, slogan).png';
import youWont from './Assets/Images/You won\'t.webp';
import believe from './Assets/Images/believe.webp';
import yourEyes from './Assets/Images/your eyes.webp';
import React from 'react';
import Menu from './Menu';
import Header from './Header';
import {Link} from "react-router-dom";


import model from './Assets/Images/Model.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import {motion} from 'framer-motion';


import "./Assets/Fonts/Mustasurma.ttf";
import "./Assets/Fonts/Portia.otf";
import "./Assets/Fonts/A Box For.ttf";




export default function HomePage(props) {


  const pageTransition = {
    hidden: {
      height: "0vh",
      transition: {
        duration: 1
      }
    },
    show: {
      height: "100vh",
      transition: {
        duration: 1
      }
    }
  }
    return (
          <motion.div className="homepage" variants={pageTransition} initial="hidden" animate={props.showMenu?"hidden":"show"}>
            <motion.div layout className="main-hero-buttons" key="main-hero-buttons">
              <Link to="/Shop" className="button" id="shopMen">Men's</Link>
              <Link to="/Shop" className="button" id="shopWomen">Women's</Link>
              <Link to="/Shop" className="button" id="shopEnby">Neutral's</Link>
            </motion.div>
            <main>
              <div className="main-left" style={{backgroundImage: {model}}}/>
              <div className="main-right">
                <div className="header-spacer" />
                <img className="YWBYE" id="youWont"  src={youWont} alt="text that reads: you won't"/>
                <img className="YWBYE" id="believe"  src={believe} alt="text that reads: believe" />
                <img className="YWBYE" id="yourEyes" src={yourEyes} alt="text that reads: your eyes" />
              </div>
            </main>
          </motion.div>
    )
}

