import youWont from '../../Assets/Images/HomePage/You won\'t.webp';
import believe from '../../Assets/Images/HomePage/believe.webp';
import yourEyes from '../../Assets/Images/HomePage/your eyes.webp';
import React from 'react';
import {Link} from "react-router-dom";
import './HomePage.css';
import './HomePageDesktop.css';
import { handleSunglassesChange, handleGenderChange } from '../../Util/Store/filterSlice';
import FITS from '../../Assets/Images/HomePage/FITS.png';
import model from '../../Assets/Images/HomePage/Model.png';
import Button from '../../Util/Button';
import LoadingPage from '../../Util/LoadingPage';
import { setLoading } from '../../Util/Store/LoadingSlice';


import "../../Assets/Fonts/Mustasurma.ttf";
import "../../Assets/Fonts/Portia.otf";
import "../../Assets/Fonts/A Box For.ttf";

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


export default function HomePage(props) {

const dispatch = useDispatch();
const isLoading = useSelector((state) => state.loading.isLoading);
useEffect(()=> {
  dispatch(setLoading(false))
}, [dispatch])

useEffect(() => {
  const emoji = ["🤓","👀","🕶️","😎","🥸","👓","🥽","🔍","🔎","🔭"];
  document.title = `Spyglass Eyewear ${emoji[Math.floor(Math.random()*emoji.length)]}`;
}, [])
return (
  isLoading?<LoadingPage /> : (
          <div className="HomePageComponent">
              <div className="Section YWBYESection">
                <div className="YWBYEContainer">
                  <img className="YWBYE" id="youWont"   src={youWont} alt="text that reads: you won't"/>
                  <img className="YWBYE" id="believe"   src={believe} alt="text that reads: believe" />
                  <img className="YWBYE" id="yourEyes"  src={yourEyes} alt="text that reads: your eyes" />
                </div>
                <div className="ModelContainer">
                    <img src={model} className="Model" alt="female model wearing stylish glasses"/>
                </div>
                <div className="HomePageShopButtons">
                  <Link to="./Shop" className="button" id="shopMen" onClick={() => { dispatch(handleGenderChange("men")); dispatch(setLoading(false))}}><Button text="shop men's"/></Link>
                  <Link to="./Shop" className="button" id="shopWomen" onClick={() => {dispatch(handleGenderChange("women")); dispatch(setLoading(false))}}><Button text="shop women's" /></Link>
                  <Link to="./Shop" className="button" id="shopEnby" onClick={() => {dispatch(handleGenderChange("enby")); dispatch(setLoading(false))}}><Button text="shop neutrals'" /></Link>
                </div>
              </div>
              <div className="SectionSpacer" />
              <div className="Section FITSSection">
                <h2>Have a lIttle</h2>
                <h1>Fun In the Sun</h1>
                <img src={FITS} id="FITS" alt="female model wearing sunglasses on a beach" />
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
    )
}

