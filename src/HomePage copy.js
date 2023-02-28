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

  const header = {
    hidden: {
        height: 0,
        overflow: "hidden",
        transition: {
          delay: 0.3,
          duration: 0.2
        }
    },
    show: {
        height: "100vh",
        overflow: "visible",
        transition: {
          staggerChildren: 5,
          duration: 0.2,
          when: "beforeChildren"
        }
    }
}

const content = {
  hidden: {
    height: 0,
    overflow: "hidden",
    transition: {
      delay: 0.3,
      duration: 0.2
    }
},
show: {
    height: "100vh",
    overflow: "visible",
    transition: {
      staggerChildren: 0.5,
      duration: 0.2,
      when: "beforeChildren"
    }
}
}

  const pageTransition = {
    hidden: {
      opacity: 0,
      transition: {

      }
    },
    show: {
      opacity: 1,
      height: "100vh",
      transition: {
        staggerChildren: 0.5,
        when: "beforeChildren"
      }
    }
  }
    return (
      <>
        <motion.div variants={header} initial="hidden" animate={props.showMenu?"show":"hidden"} key="menu">
          <Menu cart={props.cart} handleMenuToggle={props.handleMenuToggle} showMenu={props.showMenu} />
        </motion.div>
        <motion.div variants={content} initial="show" animate={!props.showMenu?"show":"hidden"} key="content">
        <Header cart ={props.cart} handleMenuToggle={props.handleMenuToggle} showMenu={props.showMenu}/>

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
        </motion.div>
      </>
    )
}

