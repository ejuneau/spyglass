import './App.css';
import Products from './Util/Products';

import HomePage from './Components/HomePage/HomePage';
import ShopPage from './Components/ShopPage/ShopPage';
import AboutPage from './Components/AboutPage/AboutPage';
import ProductPage from './Components/ShopPage/ProductPage/ProductPage.js';
import CartPage from './Components/CartPage/CartPage';
import ContactPage from './Components/ContactPage/ContactPage';
import CheckoutPage from './Components/CartPage/CheckoutPage/CheckoutPage';
import Menu from './Util/Menu';
import Header from './Util/Header';


import "./Assets/Fonts/Mustasurma.ttf";
import "./Assets/Fonts/Portia.otf";
import "./Assets/Fonts/A Box For.ttf";
import "./Assets/Fonts/Noir_regular.otf";
import "./Assets/Fonts/Got_Heroin.ttf";

import React, { useState, useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, useLocation, Routes } from 'react-router-dom';
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import {useSelector, useDispatch} from 'react-redux';
import { handleRotateChange } from './Util/rotateSlice';
import { faCropSimple } from '@fortawesome/free-solid-svg-icons';
import LoadingPageComponent from './Util/LoadingPage';


function App() {
	const showMenu = useSelector((state) => state.menu.showMenu);
  const rotateBy = useSelector((state) => state.rotate.rotateBy);
  const dispatch = useDispatch();
  //Calculate vh for mobile
  let vh = window.innerHeight * 0.01;
  //set vh to CSS Variable
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  var rotateByNoUnit = rotateBy && rotateBy.slice(0, -3);
  var rotateByNumber = Number(rotateByNoUnit)
  document.documentElement.style.setProperty('--rotatedClipHeight', Math.tan(rotateByNumber));

  const [OA, setOA] = useState(((window.innerHeight/100)*15) / (window.innerWidth));
  const [angle, setAngle] = useState(Math.atan(OA));
  //const [rotateBy, setRotateBy] = useState(`${1 - angle}rad`)
  const size = useWindowSize();
  //Calculate minimum angle to rotate by when 15vh becomes 9rem
  //9rem in pixels
  const minHeight = 9 * parseFloat(getComputedStyle(document.documentElement).fontSize); 
  const [minAngle, setMinAngle] = useState(Math.atan(minHeight / size.width));
 

      useEffect(() => {
            setOA(((size.height/100)*15) / (size.width));
            setAngle(Math.atan(OA));
            setMinAngle(Math.atan(minHeight / size.width));
          
      }, [size]);
      useEffect(()=> {
        setAngle(Math.atan(OA));
      }, [OA]);
      useEffect(()=>{
        dispatch(handleRotateChange(Math.max(angle, minAngle)));
      }, [angle])

  const emoji = ["🤓","👀","🕶️","😎","🥸","👓","🥽","🔍","🔎","🔭"];
  useEffect(() => {
    document.title = `Spyglass Eyewear ${emoji[Math.floor(Math.random()*emoji.length)]}`;
  }, [])
  


  const pageTransition = {
    hidden: {
      y: window.innerHeight<=960?"9rem":"15vh",
      display: "none",
      transition: {
        display: {delay: 1},
        staggerChildren: 0.2,
        y: {type: "linear", delay: 0.2, duration: 0.2},
      }
    },
    show: {
      y: window.innerHeight<=960?"0rem":"0vh",
      display: "inherit",
      transition: {
        y: {type: "linear", duration: 0.2, delay: 0.2}
      }
    }
  }

  return (
	<AnimatePresence>
		<motion.div className="Content" key="Content" variants={pageTransition} initial="show" layout animate={showMenu?"hidden":"show"} > 
        	<Routes>
          		<Route path="/" element={
            		<AnimatePresence mode="wait" key="ContentRoute">
						<motion.div key="HomePageRoute" initial={{opacity: 0}} animate={{opacity: 1 }} exit={{opacity: 0}}>
							<HomePage />
						</motion.div>
					</AnimatePresence>
				} />
				<Route path="/About" element={
					<AnimatePresence mode="wait" key="ContentRoute">
						<motion.div key="AboutPageRoute" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
							<AboutPage />
						</motion.div>
					</AnimatePresence>
				} />
				<Route path="/Shop"  element={
					<AnimatePresence mode="wait" key="ContentRoute">
						<motion.div key="ShopPageRoute" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
							<ShopPage />
						</motion.div>
					</AnimatePresence>
				} />
            		<Route path="/Shop/Product/:name" element={
                      <ProductPage key="ProductPageComponent:name" />
                } />
          		<Route path="/Cart" element={<CartPage />} />
            		<Route path="/Cart/Checkout" element={<CheckoutPage />} />
          		<Route path="/Contact" element={<ContactPage />} />
        	</Routes>
			{/* <LoadingPageComponent /> */}
		</motion.div>
	</AnimatePresence>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default App;
