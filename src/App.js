import './App.css';
import Products from './Util/Products';

import HomePage from './Components/HomePage/HomePage';
import ShopPage from './Components/ShopPage/ShopPage';
import AboutPage from './Components/AboutPage/AboutPage';
import ProductPage from './Components/ProductPage/ProductPage';
import CartPage from './Components/CartPage/CartPage';
import ContactPage from './Components/ContactPage/ContactPage';
import Menu from './Util/Menu';
import Header from './Util/Header';


import "./Assets/Fonts/Mustasurma.ttf";
import "./Assets/Fonts/Portia.otf";
import "./Assets/Fonts/A Box For.ttf";
import "./Assets/Fonts/Noir_regular.otf";

import React, { useState, useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, useLocation, Routes } from 'react-router-dom';
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import {useSelector, useDispatch} from 'react-redux';


function App() {
	const showMenu = useSelector((state) => state.menu.showMenu);

  //Calculate vh for mobile
  let vh = window.innerHeight * 0.01;
  //set vh to CSS Variable
  document.documentElement.style.setProperty('--vh', `${vh}px`);

    // useEffect(() => {
  //   document.title = `Spyglass Eyewear ${emoji[Math.floor(Math.random()*emoji.length)]}`;
  // }, [emoji])

  const emoji = ["🤓","👀","🕶️","😎","🥸","👓"];
  document.title = `Spyglass Eyewear ${emoji[Math.floor(Math.random()*emoji.length)]}`;

  const [sort, setSort] = useState('');
  const handleSortChange = (sortBy) => {
    if ( sort === sortBy ) {
      setSort('');
      console.log("Active Sort: None");
    } else {
      setSort(sortBy);
      console.log("Active Sort: " + sortBy);
    }
  }


  const pageTransition = {
    hidden: {
      y: "20vh",
      display: "none",
      transition: {
        display: {delay: 1},
        staggerChildren: 0.2,
        y: {type: "linear", delay: 0.2, duration: 0.2},
      }
    },
    show: {

      y:0,
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
				<Route path="/" element={<HomePage />} />
				<Route path="/About" element={<AboutPage />} />
				<Route path="/Shop" element={<ShopPage />} />
					<Route path="/Shop/Product/:name" element={<ProductPage key="ProductPageComponent" />} />
				<Route path="/Cart" element={<CartPage />} />
				<Route path="/Contact" element={<ContactPage />} />
			</Routes>
		</motion.div>
	</AnimatePresence>
  );
}

export default App;
