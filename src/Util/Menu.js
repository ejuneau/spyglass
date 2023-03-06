import './Menu.css';
import './MenuDesktop.css';
import { ReactComponent as ActiveNavButton} from '../Assets/Images/activeNavButton.svg';
import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Link} from 'react-router-dom';
export default function Menu(props) {
    const [OA, setOA] = useState(((window.innerHeight/100)*15) / (window.innerWidth));
    const [angle, setAngle] = useState(Math.atan(OA));
    const [rotateBy, setRotateBy] = useState(`${1 - angle}rad`)

    //Calculate minimum angle to rotate by when 15vh becomes 9rem
    //9rem in pixels
    const minHeight = 9 * parseFloat(getComputedStyle(document.documentElement).fontSize); 
    const [minAngle, setMinAngle] = useState(Math.atan(minHeight / window.innerWidth));


        useEffect(() => {
            setOA(((window.innerHeight/100)*15) / (window.innerWidth));
            setAngle(Math.atan(OA));
            setMinAngle(Math.atan(minHeight / window.innerWidth));
            setRotateBy(`${-1 * Math.max(angle, minAngle)}rad`);
            console.log("Cart Rotation: "+rotateBy);
        }, [window.innerHeight, window.innerWidth]);

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
    return (
        <motion.div className="menu" key="menu" variants={menu} initial="hidden" animate={props.showMenu?"show":"hidden"} >
            <motion.div key="menuTopAccent" className="menuTopAccent" variants={menuTopAccent} ></motion.div>
            <motion.div className="menuCart" variants={menuCartItem} style={{rotate: rotateBy}}><p>Cart: {props.cart}</p> </motion.div>
            <motion.div className="menuMain" key="menuMain">
                    <motion.nav className="menuList" key="menuList" variants={menuListContainer} animate={props.showMenu?"show":"hidden"}>
                        <motion.li key="homeButton" variants={menuListItem} onClick={() => {window.scrollTo({top:0,behavior:'smooth'}); props.handleMenuToggle()}}><Link className={`menuButton ${window.location.pathname === "/" && "activeNavButton"}`} to="/">Home</Link>{window.location.pathname === "/" && <motion.div animate={{ rotate: [10, 45], y: "-1.5rem", x: "-2rem" }} transition={{ rotate: {duration: 2, repeat: Infinity, repeatType: "reverse"}, y: {duration: 1.6, repeat: Infinity, repeatType: "reverse"}, x: {duration: 2.1, repeat: Infinity, repeatType: "reverse"}}}><ActiveNavButton  id="activeNavButton" alt="Active Page indicator"/></motion.div>}</motion.li>
                        <motion.li key="shopButton" variants={menuListItem} onClick={() => {window.scrollTo({top:0,behavior:'smooth'}); props.handleMenuToggle()}}><Link className={`menuButton ${window.location.pathname === "/Shop" && "activeNavButton"}`} to="/Shop">Shop</Link>{window.location.pathname === "/Shop" && <motion.div animate={{ rotate: [7, 39], y: "-1.7rem", x: "-2.1rem" }} transition={{ rotate: {duration: 1.9, repeat: Infinity, repeatType: "reverse"}, y: {duration: 1.5, repeat: Infinity, repeatType: "reverse"}, x: {duration: 2.2, repeat: Infinity, repeatType: "reverse"}}}><ActiveNavButton  id="activeNavButton" alt="Active Page indicator"/></motion.div>}</motion.li>
                        <motion.li key="aboutButton" variants={menuListItem} onClick={() => {window.scrollTo({top:0,behavior:'smooth'});props.handleMenuToggle()}}><Link className={`menuButton ${window.location.pathname === "/About" && "activeNavButton"}`} to="/About">About</Link>{window.location.pathname === "/About" && <motion.div animate={{ rotate: [6, 43], y: "-1.3rem", x: "-2.4rem" }} transition={{ rotate: {duration: 1.8, repeat: Infinity, repeatType: "reverse"}, y: {duration: 1.7, repeat: Infinity, repeatType: "reverse"}, x: {duration: 2.1, repeat: Infinity, repeatType: "reverse"}}}><ActiveNavButton  id="activeNavButton" alt="Active Page indicator"/></motion.div>}</motion.li>
                        <motion.li key="contactButton" variants={menuListItem} onClick={() => {window.scrollTo({top:0,behavior:'smooth'});props.handleMenuToggle()}}><Link className={`menuButton ${window.location.pathname === "/Contact" && "activeNavButton"}`} to="/Contact">Contact</Link>{window.location.pathname === "/Contact" && <motion.div animate={{ rotate: [13, 50], y: "-1rem", x: "-1.5rem" }} transition={{ rotate: {duration: 1.7, repeat: Infinity, repeatType: "reverse"}, y: {duration: 1.4, repeat: Infinity, repeatType: "reverse"}, x: {duration: 1.9, repeat: Infinity, repeatType: "reverse"}}}><ActiveNavButton  id="activeNavButton" alt="Active Page indicator"/></motion.div>}</motion.li>
                    </motion.nav>
                <motion.div key="closeMenuContainer" className="closeMenuContainer" onClick={() => window.scrollTo({top:0,behavior:'smooth'})| props.handleMenuToggle()} variants={closeMenuVariants}><p>X</p></motion.div>
            </motion.div>
            </motion.div>
    )
}
