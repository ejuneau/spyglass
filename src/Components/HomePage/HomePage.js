import youWont from '../../Assets/Images/You won\'t.webp';
import believe from '../../Assets/Images/believe.webp';
import yourEyes from '../../Assets/Images/your eyes.webp';
import React from 'react';
import {Link, useSearchParams} from "react-router-dom";
import './HomePage.css';
import './HomePageDesktop.css';
import { handleFilterChange } from '../../Util/filterSlice';
import model from '../../Assets/Images/Model.png';
import {motion} from 'framer-motion';
import Button from '../../Util/Button';


import "../../Assets/Fonts/Mustasurma.ttf";
import "../../Assets/Fonts/Portia.otf";
import "../../Assets/Fonts/A Box For.ttf";

import { useDispatch } from 'react-redux';


export default function HomePage(props) {

const dispatch = useDispatch();
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
                  <Link to="./Shop" className="button" id="shopMen" onClick={() => { dispatch(handleFilterChange("men"))}}><Button text="shop men's"/></Link>
                  <Link to="./Shop" className="button" id="shopWomen" onClick={() => {dispatch(handleFilterChange("women"))}}><Button text="shop women's" /></Link>
                  <Link to="./Shop" className="button" id="shopEnby" onClick={() => {dispatch(handleFilterChange("enby"))}}><Button text="shop neutrals'" /></Link>
                </div>
              </div>
              <div className="SectionSpacer" />
              <div className="Section FITSSection">
                <h1>Fun In The Sun</h1>
                <Link to="/Shop">Shop Sunglasses</Link>
              </div>
              <div className="SectionSpacer" />
              <div className="Section AboutSection">
                <h1>Who we are</h1>
                <p>"Eyewear Everywhere" might be an odd sloagn for an eyeglasses boutique, but our fonder had a very specific goal in mind. If you'll indulge us, we'd love to tell you the whole story.</p>
                <Link to="/About"><Button text="Learn More" /></Link>
              </div>
              <div className="SectionSpacer" />
              <div className="Section spacerSection" />
          </div>
    )
}

