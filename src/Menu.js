import './Menu.css';
import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Link} from 'react-router-dom';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import Header from './Header';
export default function Menu(props) {


    const menuListContainer = {
        hidden: {
            opacity: 0,
            x: -100
        },
        show: {
            opacity: 1,
            x:0,
            transition: {
                staggerChildren: 0.05,
                when: "beforeChildren"
                
            }
        }
    }
    const menuListItem = {
        hidden: { 
            opacity: 0,
            x: -1000
         },
        show: { 
            opacity: 1,
            x: 0,
         }
    }

    const menuTopAccent = {
        hidden: {
            height: 0,
        },
        show: {
            height: "15em",
            transition: {
                duration: 0.2,
                delay: 0.3,
                when: "beforeChildren"
            }
        }}

    const menuCartItem = {
        hidden: {
            opacity: 0,
            x: 1000
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.2
            }
        }
    }
    const closeMenu = {
        hidden: {
            opacity: 0,
            display: "none",
            transition: {
                duration: 0.2,
                display: {delay: 0.4}
            }
        },
        show: {
            opacity: 1,
            display: "inherit",
            transition: {
                delay: 0.1,
                duration: 0.2,
                display: {delay: 0.1}
            }
        }
    }

    const pageTransition = {
        hidden: {
            height: "0vh",
            transition: {
                delay: 0.2,
              duration: 0.2,
              when: "afterChildren",
            }
        },
        show: {
            height: "100vh",
            transition: {
              duration: 0.5,
              when: "beforeChildren"
            }
        }
    }
    return (

        <motion.div className="menu" variants={pageTransition} initial="hidden" animate={props.showMenu?"show":"hidden"} key="menu">
            <motion.div key="menuTopAccent" className="menuTopAccent" variants={menuTopAccent} initial={props.showMenu?"hidden":"show" } animate={props.showMenu?"show":"hidden"}>
                <motion.p className="menuCart" variants={menuCartItem}>Cart: {props.cart}</motion.p>
            </motion.div>
            <div className="menuMain">
                <motion.nav className="menuList" key="menuList" variants={menuListContainer} initial={!props.showMenu?"show":"hidden"} animate={props.showMenu?"show":"hidden"}>
                    <motion.li key="homeButton" variants={menuListItem} onClick={() => {setTimeout(()=>{props.handleMenuToggle()}, 200)}}><Link className="menuButton" to="/">Home</Link></motion.li>
                    <motion.li key="shopButton" variants={menuListItem} onClick={() => {setTimeout(()=>{props.handleMenuToggle()}, 200)}}><Link className="menuButton" to="/Shop">Shop</Link></motion.li>
                    <motion.li key="aboutButton" variants={menuListItem} onClick={() => {props.handleMenuToggle()}}><a className="menuButton" href="/About">About</a></motion.li>
                    <motion.li key="contactButton" variants={menuListItem} onClick={() => {props.handleMenuToggle()}}><a className="menuButton" href="/Contact">Contact</a></motion.li>
                </motion.nav>
                <motion.div className="closeMenuContainer" onClick={props.handleMenuToggle} variants={closeMenu} animate={props.showMenu?"show":"hidden"}><p>X</p></motion.div>
            </div>
            
        </motion.div>

    )
}
