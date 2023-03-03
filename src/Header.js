import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import logoWhite from './Assets/Images/Logo (White, slogan).png';
import logoBlack from './Assets/Images/Logo (Black, slogan).png';
import {motion} from 'framer-motion';
import React from 'react';
import Menu from './Menu';
import './Header.css';



export default function Header(props) {

    const hamburger = {
        hidden: {
            opacity: 0,
            display: "none",
            transition: {
                display: {delay: 0.4}
            }
        },
        show: {
            opacity: 1,
            display: "inherit",
            transition: {
                delay: 0.2,
                display: {delay: 0.2}
            }
        },
        tap: {
            scale: 0.2,
            transition: {
                duration: 0.2
            }
        },
        hover: {
            scale: 0.9
        }
    }

    return (
        <div className="HeaderComponent">
    <header>
            <motion.div className="menu-cart" key="menu-cart" variants={hamburger} initial="show" whileTap="tap" whileHover="hover" onClick={props.handleMenuToggle} animate={props.showMenu?"hidden":"show"}>
                <div className="hamburger-container"  >
                    {/* <p className="hamburger" style={{"fontFamily": "Portia"}} >II</p> */}
                    <FontAwesomeIcon className="hamburger" icon={solid('bars')} key="HeaderIcon"/>
                </div>
                <p id="cart-count" style={{"fontFamily": "Portia", "color": "#FC5130", "display":props.cart>0?"initial":"none"}}>{props.cart}</p>
            </motion.div>
            <div className="logo">
                <img src={logoWhite} alt="Spyglass Logo" id="logo" />
            </div>
    </header>
                <div className="header-spacer"  style={{backgroundColor: props.showMenu?"":"transparent"}}>
                <div className="logo">
                  <img src={props.showMenu?logoBlack:logoWhite} style={{mixBlendMode: props.showMenu?"initial":"difference"}} alt="Spyglass Logo" id="logo" className="SpacerLogo" />
                </div>
              </div>
              </div>
    )
}