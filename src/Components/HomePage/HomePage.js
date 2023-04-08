import youWont from '../../Assets/Images/You won\'t.webp';
import believe from '../../Assets/Images/believe.webp';
import yourEyes from '../../Assets/Images/your eyes.webp';
import React from 'react';
import {Link, useSearchParams} from "react-router-dom";
import './HomePage.css';
import './HomePageDesktop.css';
import { handleSunglassesChange, handleGenderChange } from '../../Util/filterSlice';
import FITS from '../../Assets/Images/FITS.png';
import model from '../../Assets/Images/Model.png';
import {motion} from 'framer-motion';
import Button from '../../Util/Button';
import { setMenuColor } from '../../Util/menuSlice';


import "../../Assets/Fonts/Mustasurma.ttf";
import "../../Assets/Fonts/Portia.otf";
import "../../Assets/Fonts/A Box For.ttf";

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


export default function HomePage(props) {

const dispatch = useDispatch();
useEffect(()=> {
  dispatch(setMenuColor('var(--red'));

}, [])
return (
          <div className="HomePageComponent">
              <div className="Section YWBYESection">
                <div className="YWBYEContainer">
                  <img className="YWBYE" id="youWont"   src={youWont} alt="text that reads: you won't"/>
                  <img className="YWBYE" id="believe"   src={believe} alt="text that reads: believe" />
                  <img className="YWBYE" id="yourEyes"  src={yourEyes} alt="text that reads: your eyes" />
                </div>
                <div className="ModelContainer">
                    <img src={model} className="Model" alt="a sylised photo female model wearing sunglasses"/>
                </div>
                <div className="HomePageShopButtons">
                  <Link to="./Shop" className="button" id="shopMen" onClick={() => { dispatch(handleGenderChange("men"))}}><Button text="shop men's"/></Link>
                  <Link to="./Shop" className="button" id="shopWomen" onClick={() => {dispatch(handleGenderChange("women"))}}><Button text="shop women's" /></Link>
                  <Link to="./Shop" className="button" id="shopEnby" onClick={() => {dispatch(handleGenderChange("enby"))}}><Button text="shop neutrals'" /></Link>
                </div>
              </div>
              <div className="SectionSpacer" />
              <div className="Section FITSSection">
                <h2>Have a lIttle</h2>
                <h1>Fun In the Sun</h1>
                <img src={FITS} id="FITS" alt="Stylised photo of a woman wearing sunglasses on a beach" />
                <Link to="/Shop" id="FITSButton" onClick={() => {dispatch(handleSunglassesChange(true))}}><Button text="Shop sunglasses" /></Link>
              </div>
              <div className="SectionSpacer" />
              <div className="Section AboutSection">
                <h1>Who we are</h1>
                <p>"Eyewear Everywhere" might be a rather unique sloagn for an eyeglasses boutique, but our founder was nothing if not unique. If you'll indulge us, we'd love to tell you the whole story.</p>
                <Link to="/About" ><Button text="Learn More" /></Link>
              </div>
              <div className="Section spacerSection" />
          </div>
    )
}

