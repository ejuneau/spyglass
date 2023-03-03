import './Menu.css';
import './MenuDesktop.css';
import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Link} from 'react-router-dom';
export default function Menu(props) {

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
         },
         hover: {
            scale: 0.75
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
        },
        show: {
            opacity: 1,
            x: 0,
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
            transition: {
                opacity: {
                }
            }
        }
    }
    const menu = {
        hidden: {
            height: 0,
            transition: {when: "afterChildren"}
        },
        show: {
            height: "85vh",
            transition: {
                when: "beforeChildren"
            }
        }
    }
    return (
        <motion.div className="menu" key="menu" variants={menu} initial="hidden" animate={props.showMenu?"show":"hidden"} >
            <motion.div key="menuTopAccent" className="menuTopAccent" variants={menuTopAccent} ></motion.div>
            <motion.div className="menuCart" variants={menuCartItem} ><p>Cart: {props.cart}</p> </motion.div>
            <motion.div className="menuMain" key="menuMain">
                    <motion.nav className="menuList" key="menuList" variants={menuListContainer} >
                        <motion.li key="homeButton" variants={menuListItem} onClick={() => {window.scrollTo({top:0,behavior:'smooth'}); setTimeout(()=>{props.handleMenuToggle()}, 200)}}><Link className="menuButton" to="/">Home</Link></motion.li>
                        <motion.li key="shopButton" variants={menuListItem} onClick={() => {window.scrollTo({top:0,behavior:'smooth'});setTimeout(()=>{props.handleMenuToggle()}, 200)}}><Link className="menuButton" to="/Shop">Shop</Link></motion.li>
                        <motion.li key="aboutButton" variants={menuListItem} onClick={() => {window.scrollTo({top:0,behavior:'smooth'});setTimeout(()=>{props.handleMenuToggle()}, 200)}}><Link className="menuButton" to="/About">About</Link></motion.li>
                        <motion.li key="contactButton" variants={menuListItem} onClick={() => {window.scrollTo({top:0,behavior:'smooth'});setTimeout(()=>{props.handleMenuToggle()}, 200)}}><Link className="menuButton" to="/Contact">Contact</Link></motion.li>
                    </motion.nav>
                <motion.div key="closeMenuContainer" className="closeMenuContainer" onClick={() => window.scrollTo({top:0,behavior:'smooth'})| props.handleMenuToggle()} variants={closeMenuVariants} ><p>X</p></motion.div>
            </motion.div>
            </motion.div>
    )
}
