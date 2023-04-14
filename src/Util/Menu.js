import './Menu.css';
import './MenuDesktop.css';
import { ReactComponent as ActiveNavButton} from '../Assets/Images/Util/activeNavButton.svg';
import React, { useEffect} from 'react';
import {motion} from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from './Store/menuSlice';
import {Link} from 'react-router-dom';
export default function Menu() {

    const cart = useSelector((state) => state.cart.count);
    const showMenu = useSelector((state) => state.menu.showMenu);
    const dispatch = useDispatch();
    const rotateBy = useSelector((state) => state.rotate.rotateBy);



    const menuListContainer = {
        hidden: {
            opacity: 0,
            x: "-100vw",
            transition: {
                duration: 0.2,
                delay: 0.01,
                when: "afterChildren",
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        show: {
            opacity: 1,
            x:0,
            transition: {
                x: {
                    delay: 0.2,
                    duration: 0.2
                },
                staggerChildren: 0.05,
                when: "beforeChildren",
                type: "linear"
                
            }
        }
    }
    const menuListItem = {
        hidden: { 
            opacity: 0,
            x: "-100vw",
            transition: {
                x: {duration: 0.2}
            }
         },
        show: { 
            opacity: 1,
            x: 0,
         }

    }

    const menuTopAccent = {
        hidden: {
            y: "-50vh",
            transition: {
                duration: 0.2,
                
            }
        },
        show: {
            y: "0",
            transition: {
                delay: 0.2,
                when: "beforeChildren",
                type: "linear"
            }
        }}

    const menuCartItem = {
        hidden: {
            opacity: 0,
            x: "70vw",
            display: "none",
            transition: {display: {delay: 0.2}}
        },
        show: {
            opacity: 1,
            x: 0,
            display: "flex"
        }
    }
    const closeMenuVariants = {
        hidden: {
            opacity: 0,
            display: "none",
            transition: {
                opacity: { duration: 0.1 },
                display: { delay: 0.2},
            }
        },
        show: {
            display: "inherit",
            opacity: 1,
        },
    }

    const menu = {
        hidden: {
            height: 0,
            transition: {when: "afterChildren",
        type: "linear"}
        },
        show: {
            height: "85vh",
            transition: {
                when: "beforeChildren",
                type: "linear"
            }
        }
    }
    useEffect(() => {},[])
    return (
        <motion.div className="menu" key="menu" variants={menu} initial="hidden" animate={showMenu?"show":"hidden"} >
                            <motion.div 
                key="closeMenuContainer" 
                className="closeMenuContainer" 
                onClick={() => window.scrollTo({top:0,behavior:'smooth'})| dispatch(toggleMenu())} 
                variants={closeMenuVariants}>
                    <p>X</p>
                </motion.div>
            <motion.div key="menuTopAccent" className="menuTopAccent" variants={menuTopAccent} ></motion.div>
            <motion.div className="menuCart" variants={menuCartItem} style={{rotate: rotateBy}}>
                <Link className={`cartButton ${window.location.hash === "#/Cart" && "activeNavButton"}`} to="/Cart" onClick={() => {window.scrollTo({top:0,behavior:'smooth'}); dispatch(toggleMenu())}}>Cart: {cart}</Link> 
                {window.location.hash === "#/Cart" && 
                <motion.div 
                    key="activeCart" 
                    animate={{ rotate: [10, 45], y: ["-3.5rem", "-5rem"], x: ["-10rem", "-5rem"], scaleX: -1 }} 
                    transition={{ 
                        rotate: {duration: 2.5, repeat: Infinity, repeatType: "reverse"}, 
                        y: {duration: 1.9, repeat: Infinity, repeatType: "reverse"}, 
                        x: {duration: 3.1, repeat: Infinity, repeatType: "reverse"}}}>
                    <ActiveNavButton  id="activeNavButton" alt="Active Page indicator"/>
                </motion.div>}
            </motion.div>

            <motion.div className="menuMain" key="menuMain">
                    <motion.nav className="menuList" key="menuList" variants={menuListContainer} animate={showMenu?"show":"hidden"}>

                        <motion.li key="homeButton" variants={menuListItem} onClick={() => {window.scrollTo({top:0,behavior:'smooth'}); dispatch(toggleMenu())}}>
                            <Link className={`menuButton ${window.location.hash === "#/" && "activeNavButton"}`} to="/">Home</Link>
                            {window.location.hash === "#/" && 
                            <motion.div 
                                key="activeNav1" 
                                animate={{ rotate: [10, 45], y: "-1.5rem", x: "-2rem" }} 
                                transition={{ 
                                    rotate: {duration: 2, repeat: Infinity, repeatType: "reverse"}, 
                                    y: {duration: 1.6, repeat: Infinity, repeatType: "reverse"}, 
                                    x: {duration: 2.1, repeat: Infinity, repeatType: "reverse"}}}>
                                <ActiveNavButton  id="activeNavButton" alt="Active Page indicator"/>
                            </motion.div>}
                        </motion.li>

                        <motion.li key="shopButton" variants={menuListItem} onClick={() => {window.scrollTo({top:0,behavior:'smooth'}); dispatch(toggleMenu())}}>
                            <Link className={`menuButton ${window.location.hash === "#/Shop" && "activeNavButton"}`} to="/Shop">Shop</Link>
                            {window.location.hash === "#/Shop" && 
                                <motion.div 
                                key="activeNav2" 
                                animate={{ rotate: [7, 39], y: "-1.7rem", x: "-2.1rem" }} 
                                transition={{ 
                                    rotate: {duration: 1.9, repeat: Infinity, repeatType: "reverse"}, 
                                    y: {duration: 1.5, repeat: Infinity, repeatType: "reverse"}, 
                                    x: {duration: 2.2, repeat: Infinity, repeatType: "reverse"}}}>
                                <ActiveNavButton  id="activeNavButton" alt="Active Page indicator"/>
                            </motion.div>}
                        </motion.li>

                        <motion.li key="aboutButton" variants={menuListItem} onClick={() => {window.scrollTo({top:0,behavior:'smooth'});dispatch(toggleMenu())}}>
                            <Link className={`menuButton ${window.location.hash === "#/About" && "activeNavButton"}`} to="/About">About</Link>
                            {window.location.hash === "#/About" && 
                                <motion.div 
                                key="activeNav3" 
                                animate={{ rotate: [6, 43], y: "-1.3rem", x: "-2.4rem" }} 
                                transition={{ 
                                    rotate: {duration: 1.8, repeat: Infinity, repeatType: "reverse"}, 
                                    y: {duration: 1.7, repeat: Infinity, repeatType: "reverse"}, 
                                    x: {duration: 2.1, repeat: Infinity, repeatType: "reverse"}}}>
                                <ActiveNavButton  id="activeNavButton" alt="Active Page indicator"/>
                            </motion.div>}
                        </motion.li>

                        <motion.li key="contactButton" variants={menuListItem} onClick={() => {window.scrollTo({top:0,behavior:'smooth'});dispatch(toggleMenu())}}>
                            <Link className={`menuButton ${window.location.hash === "#/Contact" && "activeNavButton"}`} to="/Contact">Contact</Link>
                            {window.location.hash === "#/Contact" && 
                                <motion.div 
                                key="activeNav4" 
                                animate={{ rotate: [13, 50], y: "-1rem", x: "-1.5rem" }} 
                                transition={{ 
                                    rotate: {duration: 1.7, repeat: Infinity, repeatType: "reverse"}, 
                                    y: {duration: 1.4, repeat: Infinity, repeatType: "reverse"}, 
                                    x: {duration: 1.9, repeat: Infinity, repeatType: "reverse"}}}>
                                <ActiveNavButton  id="activeNavButton" alt="Active Page indicator"/>
                            </motion.div>}
                        </motion.li>

                    </motion.nav>



            </motion.div>
        </motion.div>
    )
}
