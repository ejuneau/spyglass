import './App.css';
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import AboutPage from './AboutPage';
import Menu from './Menu';
import Header from './Header';


import "./Assets/Fonts/Mustasurma.ttf";
import "./Assets/Fonts/Portia.otf";
import "./Assets/Fonts/A Box For.ttf";
import "./Assets/Fonts/Noir_regular.otf";

import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider, Route } from 'react-router-dom';
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";

function App() {

  const pageTransition = {
    hidden: {
      opacity: 0,
      y: "15vh",
      display: "none",
      transition: {
        opacity: {duration: 0.1},
        display: {delay: 0.2},
        staggerChildren: 0.2
      }
    },
    show: {
      opacity: 1,
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
    console.log(showMenu);
    setShowMenu(!showMenu);
  }

const AppLayout = () => {
return (

      <Outlet key="Outlet"/>
)
}


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route path="/Shop" element={<ShopPage handleMenuToggle={handleMenuToggle} showMenu={showMenu} key="HomePageComponent"/>} />
        <Route path="/About" element={<AboutPage handleMenuToggle={handleMenuToggle} showMenu={showMenu} key="AboutPageComponent"/>} />
        <Route path="/" element={<HomePage handleMenuToggle={handleMenuToggle} showMenu={showMenu} key="ShopPageComponent"/>} />
      </Route>
    )
  )
  const menuRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Menu cart={cart} handleMenuToggle={handleMenuToggle} showMenu={showMenu} key="MenuComponent"/>}>
        <Route path='/*' />
      </Route>

    )
  )

  return (
    <AnimatePresence>
      <LayoutGroup>
        <RouterProvider router={menuRouter} />
        <Header key="HeaderComponent" cart ={cart} handleMenuToggle={handleMenuToggle} showMenu={showMenu}/>
        <motion.div key="Content" className="Content" variants={pageTransition} initial="show" animate={showMenu?"hidden":"show"}>
          <RouterProvider router={router} />
        </motion.div>
      </LayoutGroup>
    </AnimatePresence>
  );
}

export default App;
