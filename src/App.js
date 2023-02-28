import './App.css';
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import Menu from './Menu';
import Header from './Header';


import "./Assets/Fonts/Mustasurma.ttf";
import "./Assets/Fonts/Portia.otf";
import "./Assets/Fonts/A Box For.ttf";

import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider, Route } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

function App() {





  const [cart, setCart] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuToggle = () => {
    console.log(showMenu);
    setShowMenu(!showMenu);
  }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage cart={cart} handleMenuToggle={handleMenuToggle} showMenu={showMenu}/>
//   },
//   {
//     path: "/Shop",
//     element: <ShopPage cart={cart} handleMenuToggle={handleMenuToggle} showMenu={showMenu}/>
//   }
// ])
const AppLayout = () => {
return (
<AnimatePresence>
  <Menu cart={cart} handleMenuToggle={handleMenuToggle} showMenu={showMenu} />
  <Header cart ={cart} handleMenuToggle={handleMenuToggle} showMenu={showMenu}/>  
  <Outlet />
  </AnimatePresence>)
}


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route path="/Shop" element={<ShopPage handleMenuToggle={handleMenuToggle} showMenu={showMenu} />} />
        <Route path="/" element={<HomePage handleMenuToggle={handleMenuToggle} showMenu={showMenu} />} />
      </Route>
    )
  )

  return (
    
        <RouterProvider router={router} />
  
  );
}

export default App;
