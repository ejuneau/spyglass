import './App.css';
import Menu from './Menu.js';
import Header from './Header.js';
import HomePage from './HomePage';
import ShopPage from './ShopPage';


import "./Assets/Fonts/Mustasurma.ttf";
import "./Assets/Fonts/Portia.otf";
import "./Assets/Fonts/A Box For.ttf";

import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import ReactModal from 'react-modal';

function App() {
  const [cart, setCart] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuToggle = () => {
    console.log(showMenu);
    setShowMenu(!showMenu);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage cart={cart} handleMenuToggle={handleMenuToggle} showMenu={showMenu}/>
    },
    {
      path: "/Shop",
      element: <ShopPage cart={cart} handleMenuToggle={handleMenuToggle}/>
    }
  ])



  return (
    <AnimatePresence>
      {/* {showMenu?<Menu cart={cart} handleMenuToggle={handleMenuToggle} />:<><Header cart ={cart} handleMenuToggle={handleMenuToggle} showMenu={showMenu}/> <RouterProvider router={router} /></>} */}
      {/* {showMenu?<Menu cart={cart} handleMenuToggle={handleMenuToggle} />:<></>} */}
      <motion.div 
      key="menu" 
      layout 
      animate={{
        height: showMenu?"100vh":"0vh",  
        overflow:"hidden"}}
      transition={{duration: 0.5, delay: showMenu?0:0.3}}
        >
          <Menu cart={cart} handleMenuToggle={handleMenuToggle} showMenu={showMenu}/>
        </motion.div>

        <motion.div 
        key="content" 
        animate={{
          height: !showMenu?"100vh":"0vh", 
          overflow:"hidden",
          }}
        transition={{duration: 0.5, delay: showMenu?0:0.3}}
          >
          <Header cart ={cart} handleMenuToggle={handleMenuToggle} showMenu={showMenu}/>
          <RouterProvider router={router} />
      </motion.div>

    </AnimatePresence>
  );
}

export default App;
