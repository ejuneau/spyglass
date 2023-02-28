import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import logo from './Assets/Images/Logo (2 color, slogan).png';
import {motion} from 'framer-motion';
import React from 'react';
import Menu from './Menu';


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
                display: {delay: 0.4}
            }
        }
    }

    return (
    <header>
        
            <motion.div className="menu-cart" key="menu-cart" variants={hamburger} initial="show" animate={props.showMenu?"hidden":"show"}>
                <div className="hamburger-container" onClick={props.handleMenuToggle}>
                    {/* <p className="hamburger" style={{"fontFamily": "Portia"}} >II</p> */}
                    <FontAwesomeIcon className="hamburger" icon={solid('bars')} onClick={props.handleMenuToggle}/>
                </div>
                <p id="cart-count" style={{"fontFamily": "Portia", "color": "#FC5130", "display":props.cart>0?"initial":"none"}}>{props.cart}</p>
            </motion.div>
            <div className="logo">
                <img src={logo} alt="Spyglass Logo" />
            </div>

    </header>
    )
}