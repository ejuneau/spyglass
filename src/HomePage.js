import './App.css';
import logo from './Assets/Images/Logo (2 color, slogan).png';
import youWont from './Assets/Images/You won\'t.webp';
import believe from './Assets/Images/believe.webp';
import yourEyes from './Assets/Images/your eyes.webp';
import React from 'react';

import model from './Assets/Images/Model.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import {motion} from 'framer-motion';


import "./Assets/Fonts/Mustasurma.ttf";
import "./Assets/Fonts/Portia.otf";
import "./Assets/Fonts/A Box For.ttf";




export default function HomePage(props) {
    return (
        <div className="homepage">
      <main>
        <div className="main-left">
          <div className="model">
            <img src={model} alt="model wearing glasses"/>
          </div>
        </div>
        <div className="main-right">
          <div className="header-spacer"></div>
          <img className="YWBYE" id="youWont"  src={youWont} alt="text that reads: you won't"/>
          <img className="YWBYE" id="believe"  src={believe} alt="text that reads: believe" />
          <img className="YWBYE" id="yourEyes" src={yourEyes} alt="text that reads: your eyes" />
          <motion.div layout className="main-hero-buttons" key="main-hero-buttons"
          >
            <a href="/Shop" className="button" id="shopMen">Men's</a>
            <a href="/Shop" className="button" id="shopWomen">Women's</a>
            <a href="/Shop" className="button" id="shopEnby">Neutral Frames</a>
          </motion.div>
        </div>
        
      </main>
      <footer>

      </footer>
      </div>
    )
}

