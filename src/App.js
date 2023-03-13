import './App.css';
import Products from './Util/Products';

import HomePage from './Components/HomePage/HomePage';
import ShopPage from './Components/ShopPage/ShopPage';
import AboutPage from './Components/AboutPage/AboutPage';
import ProductPage from './Components/ProductPage/ProductPage';
import CartPage from './Components/CartPage/CartPage';
import Menu from './Util/Menu';
import Header from './Util/Header';


import "./Assets/Fonts/Mustasurma.ttf";
import "./Assets/Fonts/Portia.otf";
import "./Assets/Fonts/A Box For.ttf";
import "./Assets/Fonts/Noir_regular.otf";

import React, { useState, useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, useLocation, Router } from 'react-router-dom';
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";

function App() {

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
  const [cart, setCart] = useState(1);
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuToggle = () => {
    console.log("Show Menu: " + !showMenu);
    setShowMenu(!showMenu);

  }



  const router = createBrowserRouter( 
    createRoutesFromElements(
      <>
        <Route path="/spyglass/" element={<HomePage handleMenuToggle={handleMenuToggle} showMenu={showMenu} sort={sort} handleSortChange={handleSortChange} key="HomePageComponent"/>} />
        <Route path="/spyglass/Shop" element={<ShopPage handleMenuToggle={handleMenuToggle} showMenu={showMenu}  sort={sort} handleSortChange={handleSortChange} key="ShopPageComponent"/>} />
          <Route path="/spyglass/Shop/Product/:name" element={<ProductPage handleMenuToggle={handleMenuToggle} showMenu={showMenu} sort={sort} key="ProductPageComponent" />} />
        <Route path="/spyglass/About" element={<AboutPage handleMenuToggle={handleMenuToggle} showMenu={showMenu} key="AboutPageComponent"/>} />
        <Route path="/spyglass/Cart" element={< CartPage handleMenuToggle={handleMenuToggle} showMenu={showMenu} key="CartPageComponent"/>} />
    </>
    ))
  
  const menuRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/spyglass/*' element={<Menu cart={cart} handleMenuToggle={handleMenuToggle} showMenu={showMenu} key="MenuComponent"/>}/>
    )
  )
  const headerRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/spyglass/*' element={<Header key="HeaderComponent" cart ={cart} handleMenuToggle={handleMenuToggle} showMenu={showMenu}/>}/>
    )
  )

  return (
    <AnimatePresence>
        <RouterProvider router={menuRouter} key ="menu"/>
        {/* <Header key="HeaderComponent" cart ={cart} handleMenuToggle={handleMenuToggle} showMenu={showMenu}/> */}
        <RouterProvider router={headerRouter} key="header"/>
        <motion.div key="Content" className="Content" variants={pageTransition} initial="show" layout animate={showMenu?"hidden":"show"}>
          <RouterProvider router={router} key={window.location.pathname} />
        </motion.div>
    </AnimatePresence>
  );
}

export default App;
