import './App.css';
import Menu from '../../src/Menu.js';
import Header from '../../src/Header.js';
import HomePage from './HomePage';
import ShopPage from './ShopPage';


import "./Assets/Fonts/Mustasurma.ttf";
import "./Assets/Fonts/Portia.otf";
import "./Assets/Fonts/A Box For.ttf";

import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [cart, setCart] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [isFirstMount, setisFirstMount] = useState(true);
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
      element: <ShopPage cart={cart} handleMenuToggle={handleMenuToggle} showMenu={showMenu}/>
    }
  ]);

useEffect(()=> {
  const handleRouteChange = () => {
    isFirstMount && setisFirstMount(false);
  };

  router.events.on("routeChangeStart", handleRouteChange);

  //If the component is unmounted, unsubscribe
  //from the event with the 'off' method:
  return () => {
    router.events.off("routeChangeStart", handleRouteChange);
  }
}, []);




  return (
    <AnimatePresence>
        <motion.div 
        key="menu" 
        layout 
        animate={{
          height: showMenu?"100vh":"0vh",  
          overflow:"hidden"}}
        transition={{duration: 1}}
        >
          <Menu cart={cart} handleMenuToggle={handleMenuToggle} />
        </motion.div>

        <motion.div 
        key="content" 
        animate={{
          height: !showMenu?"100vh":"0vh", 
          overflow:"hidden",
          }}
        transition={{duration: 1}}
          >
          <Header cart ={cart} handleMenuToggle={handleMenuToggle} showMenu={showMenu}/>
          <RouterProvider router={router} />
      </motion.div>

    </AnimatePresence>
  );
}

export default App;
