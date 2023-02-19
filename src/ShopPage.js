import './App.css';
import logo from './Assets/Images/Logo (2 color, slogan).png';
import youHave from './Assets/Images/you have.webp';
import outstayed from './Assets/Images/outstayed.webp';
import yourWelcome from './Assets/Images/your welcome.webp';
import React from 'react';

import model from './Assets/Images/Model.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';

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
          <img className="YWBYE" id="youWont"  src={youHave} alt="text that reads: you won't"/>
          <img className="YWBYE" id="believe"  src={outstayed} alt="text that reads: believe" />
          <img className="YWBYE" id="yourEyes" src={yourWelcome} alt="text that reads: your eyes" />
          <motion.div layout className="main-hero-buttons" key="main-hero-buttons"
          >
            <a href="/" className="button" id="shopMen">GO HOME</a>
            <a href="/" className="button" id="shopWomen">GO HOME</a>
            <a href="/" className="button" id="shopEnby">GO HOME</a>
          </motion.div>
        </div>
        
      </main>
      <footer>

      </footer>
      </div>
    )
}

